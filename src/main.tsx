import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as Sentry from "@sentry/react";
import './index.css'

Sentry.init({
    dsn: "https://91bb7fe4b8dd4335bd52a901289c62ad@o4505239431217152.ingest.sentry.io/4505239450812416",
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <App />
  
)
