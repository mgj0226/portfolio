import React, {useEffect, forwardRef, useRef} from "react";
import "./Switch.css";
import { useTheme } from "../ThemeContext";

const Switch = ((props, ref) => {
  const { theme, toggleTheme } = useTheme();
  const switchRef = useRef(null);
  const lightBaseRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (theme === 'light') {
        lightBaseRef.current.classList.remove('fadeIn');
        lightBaseRef.current.classList.add('fadeOut');
        sunRef.current.classList.remove('sunIn');
        sunRef.current.classList.add('sunOut');
        moonRef.current.classList.remove('moonOut');
        moonRef.current.classList.add('moonIn');
      } else if (theme === 'dark') {
        lightBaseRef.current.classList.remove('fadeOut');
        lightBaseRef.current.classList.add('fadeIn');
        sunRef.current.classList.remove('sunOut');
        sunRef.current.classList.add('sunIn');
        moonRef.current.classList.remove('moonIn');
        moonRef.current.classList.add('moonOut');
      }
    };

    if (switchRef.current){switchRef.current.addEventListener('click', handleClick);}

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      if (switchRef.current){switchRef.current.removeEventListener('click', handleClick);}
    };
  }, [theme]);

 return (
   <label className="switch" ref={switchRef}>
     <input
       type="checkbox"
       id="toggle"
       checked={theme !== "light"}
       onChange={toggleTheme}
       aria-label="Toggle theme"
     />
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<g id="darkModeSwitch">
<rect id="darkBase" x="19" y="36" width="70" height="30" rx="15" fill="#636363"/>
<g id="moon" ref={moonRef}>
<circle id="Ellipse 1" cx="74" cy="51" r="13" fill="#D9D9D9"/>
<circle id="Ellipse 2" cx="69.6667" cy="46.6667" r="8.66667" fill="#636363"/>
</g>
<rect id="lightBase" ref={lightBaseRef} x="19" y="36" width="70" height="30" rx="15" fill="#87CEEB"/>
<g id="sun" ref={sunRef}>
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
});

export default Switch;
