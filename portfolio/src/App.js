import React, {useState, useEffect, useRef} from "react";

import Header from "./components/Header";
import About from "./components/About";
import './App.css';
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <Header
        theme={theme}
        setTheme={setTheme}/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
