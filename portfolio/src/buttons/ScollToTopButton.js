import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
// import '../css/Buttons.css';
import {ReactComponent as ArrowIcon} from '../images/keyboard_arrow_up.svg';

const ScrollToTopButton = ()=> {
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div>
            <button className="animatedButton" onClick={scrollToTop}>
                <ArrowIcon className="ArrowIcon"/>
            </button>
            <p className="BackToTop">Back to Top</p>
        </div>
    );
};

  export default ScrollToTopButton;