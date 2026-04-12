import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@components/layout/AppLayout'
import NotFound from '@pages/NotFound'
import ProtectedRoute from '@components/auth/ProtectedRoute'
import LoadingScreen from '@components/ui/LoadingScreen'

const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Services = lazy(() => import('@pages/Services'))
const HowItWorks = lazy(() => import('@pages/HowItWorks'))
const Testimonials = lazy(() => import('@pages/Testimonials'))
const FAQ = lazy(() => import('@pages/FAQ'))
const Contact = lazy(() => import('@pages/Contact'))
const Login = lazy(() => import('@pages/Login'))
const Register = lazy(() => import('@pages/Register'))
const Dashboard = lazy(() => import('@pages/Dashboard'))

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/how-it-works', element: <HowItWorks /> },
      { path: '/testimonials', element: <Testimonials /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Suspense>
    ),
  },
])

export default function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />
}
