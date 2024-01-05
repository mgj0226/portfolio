import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const ScrollToTopButton = () => {
//     const [isVisible, setIsVisible] = useState(false);
  
//     const handleScroll = () => {
//         if (window.scrollY > 200) {
//             setIsVisible(true);
//         } else {
//             setIsVisible(false);
//         }
//     };
//     const scrollToTop = () => {
//         window.scrollTo({
//             top:0,
//             behavior: 'smooth'
//         });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return(
//         <div>
//             {isVisible && (
//                 <button
//                     onClick={scrollToTop}
//                     className="btn btn-primary scroll-to-top-button"
//                 >
//                     Go to Top
//                 </button>
//             )}
//         </div>
//     );
//   };

const ScrollToTopButton = ()=> {
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };
    
    return (
        <button onClick={scrollToTop} style={{fontSize:'24px'}}><FontAwesomeIcon icon={faArrowUp}/></button>
    );
};

  export default ScrollToTopButton;