import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(()=> {
    const current =  document.querySelector('html').classList;
    current.remove('light', 'dark')
    current.add(themeMode)

  },[themeMode])
  return (
  <ThemeProvider value={{darkTheme,lightTheme ,themeMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme btn */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
