import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import SplashScreen from "./components/SplashScreen";
import ChartComponent from "./components/ChartComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <h1>Dashboard</h1>
          <ChartComponent />
          <Dashboard />
          <Footer />
        </>
      )}
    </div>
  );
}


export default App;