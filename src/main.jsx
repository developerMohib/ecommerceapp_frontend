import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import * as Sentry from "@sentry/react";
import SentryErrorFallback from './components/SentryErrorFallback.jsx'
import SentryUserSynce from './components/SentryUserSynce.jsx'


const queryClient = new QueryClient()


const apiBase = import.meta.env.VITE_API_URL ?? ""
const tracePropagationTargets = apiBase.length > 0 ? [apiBase] : typeof window !== "undefined" ? [window.location.origin] : []

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  sendDefaultPii: true,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration({
    maskAllInputs: false, maskAllText: false,
    blockAllMedia: false
  })],
  tracesSampleRate: 1.0, tracePropagationTargets: tracePropagationTargets, replaysSessionSampleRate: 1.0, replaysOnErrorSampleRate: 1.0, enableLogs: true

})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <SentryUserSynce>
        <QueryClientProvider client={queryClient}>
          <Sentry.ErrorBoundary fallback={<SentryErrorFallback />}>
            <App />
          </Sentry.ErrorBoundary>
        </QueryClientProvider>
      </SentryUserSynce>
    </ClerkProvider>
  </StrictMode>,

)
