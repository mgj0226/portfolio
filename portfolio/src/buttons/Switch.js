import React, {useEffect} from "react";
import "./Switch.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
 const { theme, toggleTheme } = useTheme();

 useEffect(() => {
  const switchElement = document.querySelector('.switch');
  const lightBaseElement = document.querySelector('#darkModeSwitch #lightBase');
  const sunElement = document.querySelector('#darkModeSwitch #sun');
  const moonElement = document.querySelector('#darkModeSwitch #moon');

  const handleClick = () => {
    if (theme === 'light') {
      lightBaseElement.classList.remove('fadeIn');
      lightBaseElement.classList.add('fadeOut');
      sunElement.classList.remove('sunIn');
      sunElement.classList.add('sunOut');
      moonElement.classList.remove('moonOut');
      moonElement.classList.add('moonIn');
    } else if (theme === 'dark') {
      lightBaseElement.classList.remove('fadeOut');
      lightBaseElement.classList.add('fadeIn');
      sunElement.classList.remove('sunOut');
      sunElement.classList.add('sunIn');
      moonElement.classList.remove('moonIn');
      moonElement.classList.add('moonOut');
    }
  };

  switchElement.addEventListener('click', handleClick);

  // Clean up function to remove the event listener when the component unmounts
  return () => {
    switchElement.removeEventListener('click', handleClick);
  };
}, [theme]);

 return (
   <label className="switch">
     <input
       type="checkbox"
       id="toggle"
       checked={theme !== "light"}
       onChange={toggleTheme}
     />
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="darkModeSwitch">
<rect id="darkBase" x="19" y="36" width="70" height="30" rx="15" fill="#636363"/>
<g id="moon">
<circle id="Ellipse 1" cx="74" cy="51" r="13" fill="#D9D9D9"/>
<circle id="Ellipse 2" cx="69.6667" cy="46.6667" r="8.66667" fill="#636363"/>
</g>
<rect id="lightBase" x="19" y="36" width="70" height="30" rx="15" fill="#87CEEB"/>
<g id="sun">
<circle id="Ellipse 3" cx="34" cy="51" r="13" fill="#FFE484" fill-opacity="0.7"/>
<circle id="Ellipse 4" cx="34" cy="51" r="8.18518" fill="#FDB813"/>
<g id="sunRay">
<path id="Line 1" d="M33.5185 38.963V41.8518" stroke="white" stroke-linecap="round"/>
<path id="Line 3" d="M33.5185 60.1481V63.037" stroke="white" stroke-linecap="round"/>
<path id="Line 2" d="M46.037 50.5185H43.1482" stroke="white" stroke-linecap="round"/>
<path id="Line 4" d="M24.8519 50.5185H21.963" stroke="white" stroke-linecap="round"/>
<path id="Line 5" d="M42.6667 59.6666L40.6239 57.6239M27.3761 44.3761L25.3333 42.3333" stroke="white" stroke-linecap="round"/>
<path id="Line 6" d="M24.8518 58.8206L26.8946 56.7778M39.7778 43.8946L41.8205 41.8519" stroke="white" stroke-linecap="round"/>
</g>
</g>
</g>
</svg>


   </label>
 );
};

export default Switch;
