import { RouterProvider } from "react-router-dom"
import router from "@/routes/init"
import { ThemeProvider } from '@/components/theme-provider'
import { useAppSelector } from "./store/hook"

function App() {

  const themeMode = useAppSelector(state => state.themeMode)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={themeMode}
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
