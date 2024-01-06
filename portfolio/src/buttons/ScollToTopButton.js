import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import './Buttons.css';
import {ReactComponent as ArrowIcon} from '../images/keyboard_arrow_up.svg';

const ScrollToTopButton = ()=> {
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };
    
    return (
        <>
            <button
                className="animatedButton"
                onClick={scrollToTop}
                style={{
                    fontSize: "30px",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    position: "fixed",
                    right: "30px",
                    bottom: "25px",
                    color: "white",
                }}
            >
                <ArrowIcon
                    className="ArrowIcon"
                    width="50px"
                    height="50px"
                    fill="white"
                />
            </button>
            <p
                className="BackToTop"
                style={{
                    position:"fixed",
                    right:"20px",
                    bottom:"5px",
                    color:"white",
                }}
                
            >Back to Top</p>
        </>
    );
};

  export default ScrollToTopButton;