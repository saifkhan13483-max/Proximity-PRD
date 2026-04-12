import type { ContactFormData } from '@/types/index'

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL

    if (apiUrl) {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`)
      }

      return await response.json()
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))
    return { success: true, message: 'Message received successfully.' }
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again or call us directly.',
    }
  }
}
