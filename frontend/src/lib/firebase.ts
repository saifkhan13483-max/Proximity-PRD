import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

declare const __FB_API_KEY__: string
declare const __FB_AUTH_DOMAIN__: string
declare const __FB_PROJECT_ID__: string
declare const __FB_STORAGE_BUCKET__: string
declare const __FB_MESSAGING_SENDER_ID__: string
declare const __FB_APP_ID__: string

const firebaseConfig = {
  apiKey: __FB_API_KEY__,
  authDomain: __FB_AUTH_DOMAIN__,
  projectId: __FB_PROJECT_ID__,
  storageBucket: __FB_STORAGE_BUCKET__,
  messagingSenderId: __FB_MESSAGING_SENDER_ID__,
  appId: __FB_APP_ID__,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
