import {ChakraProvider} from "@chakra-ui/react";
import { ThemeProvider, useTheme } from './ThemeContext';
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import "./css/App.css";
import "./css/Darkmode.css";
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
  const classTheme = theme;

  return (
    <main className={classTheme}>
      <Header/>
      <Switch />
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
