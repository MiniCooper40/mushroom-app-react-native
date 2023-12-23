import LoginPage from "./app/(auth)/index";
import ThemeProvider from "./style/ThemeProvider";


export default function App() {

  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  )
}