import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'

import type { ContactFormInput } from '../../types/portfolio'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

type FieldErrors = Partial<Record<keyof ContactFormInput, string>>

const initialValues: ContactFormInput = {
  name: '',
  email: '',
  message: '',
}

function validate(values: ContactFormInput) {
  const errors: FieldErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please use a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please share a short project brief.'
  }

  return errors
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>(initialValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

  const submitLabel = useMemo(() => {
    if (status === 'loading') return 'Sending...'
    if (status === 'success') return 'Sent'
    return 'Submit'
  }, [status])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setFeedback('Please review the highlighted fields.')
      return
    }

    if (!endpoint) {
      setStatus('error')
      setFeedback('Form endpoint is missing. Add VITE_FORMSPREE_ENDPOINT in .env.')
      return
    }

    try {
      setStatus('loading')
      setFeedback('')

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialValues)
        setErrors({})
        setFeedback('Thanks, your message has been sent.')
        return
      }

      const payload = (await response.json().catch(() => null)) as
        | { errors?: Array<{ message?: string }> }
        | null

      const message = payload?.errors?.[0]?.message ?? 'Submission failed. Please try again.'
      setStatus('error')
      setFeedback(message)
    } catch {
      setStatus('error')
      setFeedback('Network error. Please try again.')
    }
  }

  return (
    <section className="flex h-full flex-col gap-4">
      <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-lavender-blush sm:text-4xl">
        Contact
      </h2>
      <form className="space-y-3" onSubmit={onSubmit} noValidate>
        <label className="block">
          <span className="mb-1 block text-sm text-lavender-blush/75">Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-lavender-blush/10 bg-lavender-blush/[0.05] px-4 py-2.5 text-sm text-lavender-blush placeholder:text-lavender-blush/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <span id="name-error" className="mt-1 block text-xs text-red-300">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-lavender-blush/75">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-lavender-blush/10 bg-lavender-blush/[0.05] px-4 py-2.5 text-sm text-lavender-blush placeholder:text-lavender-blush/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80"
            placeholder="you@email.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <span id="email-error" className="mt-1 block text-xs text-red-300">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-lavender-blush/75">Message</span>
          <textarea
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            className="min-h-28 w-full rounded-xl border border-lavender-blush/10 bg-lavender-blush/[0.05] px-4 py-2.5 text-sm text-lavender-blush placeholder:text-lavender-blush/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80"
            placeholder="Tell me about your project goals..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message ? (
            <span id="message-error" className="mt-1 block text-xs text-red-300">
              {errors.message}
            </span>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-celadon bg-celadon px-4 py-2.5 text-sm font-semibold text-charcoal transition hover:border-lavender-blush hover:bg-lavender-blush disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80"
        >
          {submitLabel}
        </button>
      </form>

      <p className="min-h-6 text-xs text-lavender-blush/75" role="status" aria-live="polite">
        {feedback}
      </p>
    </section>
  )
}
