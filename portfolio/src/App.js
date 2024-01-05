import {Box, ChakraProvider} from "@chakra-ui/react";
import ScrollToTopButton from "./buttons/ScollToTopButton";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <ChakraProvider>
      <main>
        {/* <Header/>
        <Profile/>
        <Skills/>
        <OtherSkills/>
        <Experiences/>
        <Cert/>
        <Projects/> */}
        <Box>
          <ScrollToTopButton/>
        </Box>
        <Footer/>
      </main>
    </ChakraProvider>
  );
}

export default App;
