import {ChakraProvider} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header/>
        <Profile/>
        <Skills/>
        <OtherSkills/>
        <Experiences/>
        <Cert/>
        <Projects/>
      </main>
    </ChakraProvider>
  );
}

export default App;
