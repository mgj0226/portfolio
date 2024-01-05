import {Box, ChakraProvider} from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import "./App.css"

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header/>
        <About/>
        {/* <Skills/> */}
        {/* <Experiences/> */}
        {/* <Cert/> */}
        {/* <Projects/> */}
        <Footer/>
      </main>
    </ChakraProvider>
  );
}

export default App;
