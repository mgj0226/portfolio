import React, {useState, useEffect, useRef} from "react";

import Header from "./components/Header";
import About from "./components/About";
import './App.css';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Blog from "./components/Blog";

function App() {
  const [theme, setTheme] = useState('light');
  const [themeBg, setThemeBg] = useState('lightBg');
  const [page, setPage] = useState('About');

  useEffect(() => {
    if (theme === 'light') {
      setThemeBg('lightBg');
    } else {
      setThemeBg('darkBg');
    }
  }, [theme]);


  return (
    <div className={`App ${themeBg}`}>
      <Header
        theme={theme}
        setTheme={setTheme}/>
      <About
        page={page}
        setPage={setPage}
      />
      <Projects
        page={page}
        setPage={setPage}
      />
      <Certificates
        page={page}
        setPage={setPage}
      />
      <Blog
        page={page}
        setPage={setPage}
      />
      <Footer/>
    </div>
  );
}

export default App;
