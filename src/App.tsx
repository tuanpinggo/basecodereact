import { RouterProvider } from "react-router-dom"
import router from "@/routes/init"
import { ThemeProvider } from '@/components/theme-provider'
import { useAppSelector } from "@/redux/hook"

interface RootState {
  themeMode: "light" | "dark"
}

function App() {

  const themeMode = useAppSelector((state: RootState) => state.themeMode)

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
