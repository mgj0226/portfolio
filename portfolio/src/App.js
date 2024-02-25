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
  const [page, setPage] = useState('homeSelect');
  const [pageChange, setPageChange] = useState(false);

  const pages = ['homeSelect', 'projectsSelect', 'certificatesSelect', 'blogSelect'];

  useEffect(() => {
    if (theme === 'light') {
      setThemeBg('lightBg');
    } else {
      setThemeBg('darkBg');
    }
    if (pageChange === true) {
      setTimeout(() => {
        setPageChange(false);
      }, 500);
    }
  }, [theme, pageChange]);


  return (
    <div className={`App ${themeBg} ${page}`}>
      <Header
        theme={theme}
        setTheme={setTheme}/>
      <About/>
      <Projects
        page={page}
        setPage={setPage}
        setPageChange={setPageChange}
      />
      <Certificates/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
