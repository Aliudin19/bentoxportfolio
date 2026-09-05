// Intrinsic dimensions keep responsive descriptors accurate and reserve layout space.
const assets: Record<
  string,
  { width: number; height: number; srcSet: string }
> = {
  '/images/alif-portrait-960.webp': {
    width: 960,
    height: 1706,
    srcSet:
      '/images/alif-portrait-480.webp 480w, /images/alif-portrait-960.webp 960w',
  },
  '/images/lms-1920.webp': {
    width: 1862,
    height: 1066,
    srcSet: '/images/lms-800.webp 800w, /images/lms-1920.webp 1862w',
  },
  '/images/konectgo-1920.webp': {
    width: 1904,
    height: 1063,
    srcSet: '/images/konectgo-800.webp 800w, /images/konectgo-1920.webp 1904w',
  },
}

export function responsiveImage(src: string) {
  return assets[src] ?? {}
}
