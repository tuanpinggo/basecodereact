import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import App from '@/App'
import { store } from '@/redux/store'
import { Provider } from 'react-redux' 
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'
import reportWebVitals from '@/reportWebVitals'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
          <Toaster />
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)

reportWebVitals();
