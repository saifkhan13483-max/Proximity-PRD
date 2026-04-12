import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Toast from './Toast'
import type { ToastItem } from '@/types/index'

let toastIdCounter = 0

function generateId() {
  return `toast-${++toastIdCounter}-${Date.now()}`
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = useCallback(
    (message: string, type: ToastItem['type'] = 'info', duration = 4000) => {
      const id = generateId()
      setToasts((prev) => [...prev, { id, message, type, duration }])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}

export default function ToastContainer() {
  const { toasts, addToast, removeToast } = useToast()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" aria-live="polite">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} item={toast} onDismiss={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}
