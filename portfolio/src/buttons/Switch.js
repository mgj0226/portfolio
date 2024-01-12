import "../css/Switch.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
 const { theme, toggleTheme } = useTheme();
 return (
   <label className="switch">
     <input
       type="checkbox"
       id="toggle"
       checked={theme !== "light"}
       onChange={toggleTheme}
     />
     <span className="slider round" />
   </label>
 );
};

export default Switch;
