import React, {useState, useEffect, useRef} from "react";
import logo from './assets/wolfLogo1.svg';
import MenuBtn from "./components/buttons/MenuBtn";
import DarkModeSwitch from "./components/buttons/darkModeSwitch3";
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState('closed');
  const [theme, setTheme] = useState('light');
  const switchRef = useRef(null);
  const sunRef = useRef(null);
  const menuBtnLightRef = useRef(null);

  const toggleMenu = () => {
    if (menuOpen === 'closed') {
      setMenuOpen('open');
    } else {
      setMenuOpen('closed');
    }
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      sunRef.current.classList.remove ('fadeIn');
      sunRef.current.classList.add ('fadeOut');
      menuBtnLightRef.current.classList.remove ('fadeIn');
      menuBtnLightRef.current.classList.add ('fadeOut');
    } else {
      setTheme('light');
      sunRef.current.classList.remove ('fadeOut');
      sunRef.current.classList.add ('fadeIn');
      menuBtnLightRef.current.classList.remove ('fadeOut');
      menuBtnLightRef.current.classList.add ('fadeIn');
    }
  }

  return (
    <>
      <img src={logo} className="logo" alt="logo" />
      <label className="MenuBtn">
        <input
            type="checkbox"
            id="toggle"
            checked={menuOpen !=="open"}
            onChange={toggleMenu}/>
        <MenuBtn theme={theme} menuBtnLightRef={menuBtnLightRef}/></label>
        <label className="DarkModeSwitch">
          <input
            type="checkbox"
            id="toggle"
            checked={theme !=="light"}
            onChange={toggleTheme}/>
            <DarkModeSwitch
            className="darkModeSwitch"
            theme={theme}
            sunRef={sunRef}/></label>
      <p>
        Menu: {menuOpen}
        Theme: {theme}
      </p>
    </>
  );
}

export default App;
