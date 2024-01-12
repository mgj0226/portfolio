import React, {useEffect, useRef} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import { ThemeProvider, useTheme } from './ThemeContext';
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import "./css/App.css";
import Switch from "./buttons/Switch";


function App() {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <MainComponent />
      </ChakraProvider>
    </ThemeProvider>
  );
}

function MainComponent() {
  const {theme} = useTheme();
  const switchRef = useRef(null);
  const mainRef = useRef(null);
  // const aboutTitleRef = useRef(null);
  // const aboutSubTitle1Ref = useRef(null);
  // const aboutSubTitle2Ref = useRef(null);

  useEffect(() => {
    const  handleClick = () => {
      if (theme === 'light') {
        mainRef.current.classList.remove('mainBgLight');
        mainRef.current.classList.add('mainBgDark');
      } else if (theme === 'dark') {
        mainRef.current.classList.remove('mainBgDark');
        mainRef.current.classList.add('mainBgLight');
      }
    };

    switchRef.current.addEventListener('click', handleClick);

    return () => {
      switchRef.current.removeEventListener('click', handleClick);
    };
}, [theme]);

  return (
    <main ref={mainRef}>
      <Header/>
      <Switch ref={switchRef}/>
      <About/>
      {/* <Skills/> */}
      {/* <Cert/> */}
      {/* <Experiences/> */}
      {/* <Projects/> */}
      <Footer/>
    </main>
  );
}

export default App;
