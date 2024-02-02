import React, {useState, useRef} from "react";
import MenuBtn from "./buttons/MenuBtn";
import DarkModeSwitch from "./buttons/darkModeSwitch3";

const Header = ({theme, setTheme}) => {
    const [menuOpen, setMenuOpen] = useState('closed');
    const sunRef = useRef(null);
    const moonRef = useRef(null);
    const menuBtnLightRef = useRef(null);
    const menuBtnDarkRef = useRef(null);

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
            moonRef.current.classList.remove ('fadeOut');
            moonRef.current.classList.add ('fadeIn');
            menuBtnLightRef.current.classList.remove ('fadeIn');
            menuBtnLightRef.current.classList.add ('fadeOut');
            menuBtnDarkRef.current.classList.remove ('fadeOut');
            menuBtnDarkRef.current.classList.add ('fadeIn');
        } else {
            setTheme('light');
            sunRef.current.classList.remove ('fadeOut');
            sunRef.current.classList.add ('fadeIn');
            moonRef.current.classList.remove ('fadeIn');
            moonRef.current.classList.add ('fadeOut');
            menuBtnLightRef.current.classList.remove ('fadeOut');
            menuBtnLightRef.current.classList.add ('fadeIn');
            menuBtnDarkRef.current.classList.remove ('fadeIn');
            menuBtnDarkRef.current.classList.add ('fadeOut');
        }
      }

    return (
        <section className="Header">
            <label className="MenuBtn">
            <input
                type="checkbox"
                id="toggle"
                checked={menuOpen ==="open"}
                onChange={toggleMenu}/>
            <MenuBtn
              theme={theme}
              menuBtnLightRef={menuBtnLightRef}
              menuBtnDarkRef={menuBtnDarkRef}/></label>
            <label className="DarkModeSwitch">
            <input
                type="checkbox"
                id="toggle"
                checked={theme !=="light"}
                onChange={toggleTheme}/>
                <DarkModeSwitch
                className="darkModeSwitch"
                theme={theme}
                sunRef={sunRef}
                moonRef={moonRef}/></label>
        </section>
    )
};

export default Header;