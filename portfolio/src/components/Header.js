import React, {useEffect, useRef} from "react";
import MenuBtn from "./buttons/MenuBtn";
import DarkModeSwitch from "./buttons/darkModeSwitch3";

const Header = ({menu, setMenu, theme, setTheme}) => {
    const sunRef = useRef(null);
    const moonRef = useRef(null);
    const menuBtnLightRef = useRef(null);
    const menuBtnDarkRef = useRef(null);

    const toggleMenu = () => {
        if (menu === 'menuClose') {
          setMenu('menuOpen');
        } else {
          setMenu('menuClose');
        }
      }

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1150) {
          setMenu('menuClose');
        }
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [setMenu]);


      const lights = {
          sun: sunRef,
          menuBtnLight: menuBtnLightRef,
        }
      const darks = {
          moon: moonRef,
          menuBtnDark: menuBtnDarkRef,
        }


      const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            Object.keys(lights).forEach(key => {
              const element = lights[key].current;
              element.classList.remove('fadeIn');
              element.classList.add('fadeOut');
            })
            Object.keys(darks).forEach(key => {
              const element = darks[key].current;
              element.classList.remove('fadeOut');
              element.classList.add('fadeIn');
            })
        } else {
            setTheme('light');
            Object.keys(lights).forEach(key => {
              const element = lights[key].current;
              element.classList.remove('fadeOut');
              element.classList.add('fadeIn');
            })
            Object.keys(darks).forEach(key => {
              const element = darks[key].current;
              element.classList.remove('fadeIn');
              element.classList.add('fadeOut');
            })
        }
      };

    return (
        <section className="Header">
            <label className="MenuBtn">
            <input
                type="checkbox"
                id="toggle"
                checked={menu ==="menuOpen"}
                onChange={toggleMenu}/>
            <MenuBtn
              theme={theme}
              menuBtnLightRef={menuBtnLightRef}
              menuBtnDarkRef={menuBtnDarkRef}/></label>
            <div className={`menuBg ${menu}`}></div>
            <label className="DarkModeSwitch">
            <input
                type="checkbox"
                id="toggle"
                checked={theme !=="light"}
                onChange={toggleTheme}/>
                <DarkModeSwitch
                className="darkModeSwitch"
                menu={menu}
                sunRef={sunRef}
                moonRef={moonRef}/></label>
        </section>
    )
};

export default Header;