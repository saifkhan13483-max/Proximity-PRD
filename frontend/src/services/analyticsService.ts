export function trackPageView(page: string): void {
  if (import.meta.env.VITE_ANALYTICS_ID) {
    console.log(`[Analytics] Page view: ${page}`)
  }
}

export function trackEvent(event: string, properties?: Record<string, unknown>): void {
  if (import.meta.env.VITE_ANALYTICS_ID) {
    console.log(`[Analytics] Event: ${event}`, properties)
  }
}
