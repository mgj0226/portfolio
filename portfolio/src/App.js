import {ChakraProvider} from "@chakra-ui/react";
import ScrollToTopButton from "./components/ScollToTopButton";

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
        <Projects/>
        <Footer/> */}
        <ScrollToTopButton/>
      </main>
    </ChakraProvider>
  );
}

export default App;
