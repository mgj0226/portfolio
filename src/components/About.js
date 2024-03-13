import React, { useRef } from 'react';
import logo from '../assets/wolfLogo2.svg';
import photo from '../assets/photo.svg';

const About = ( {page, setPage}) => {
  if (page === 'About') {
    var scale = 'scaleIn';
  } else {
    scale = 'scaleOut';
  }
  const logoRef = useRef(null);

  const handleClick = () => {
    logoRef.current.classList.remove('fadeIn');
    logoRef.current.classList.add('fadeOut');
    setTimeout(() => {
      logoRef.current.classList.remove('fadeOut');
      logoRef.current.classList.add('fadeIn');
    }, 5000);
  }

    return (
        <section className={`About ${scale}`} id='About'>
          <div className='AboutImages'>
            <img src={logo} className="logo" alt="logo" ref={logoRef} onClick={handleClick}/>
            <img src={photo} className="photo" alt="photo" />
          </div>
          <article className='AboutArticle'>
            <h2 className='AboutTitle'>Hello there</h2>
            <p className='AboutText'>
              I am Michael Chan, born in 1994 in Hong Kong.
              I am now living in Wirral, UK, working as a web developer.
              I am proficient in HTML, CSS, SCSS, JavaScript, and React.
              I am also familiar with Python and Figma.
            </p>
            <p className='AboutText'>
              I am always looking to expand my knowledge and skill set.
              I am currently attending the Meta Back-End Professional Courses.
              I will be having much more knowledge and skills in the future.
            </p>
          </article>

        </section>
    )
}

export default About;