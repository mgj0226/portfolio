import React, { useRef } from 'react';
import logo from '../assets/wolfLogo2.svg';
import photo from '../assets/photo.svg';

const About = () => {
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
        <section className="About">
          <img src={logo} className="logo" alt="logo" ref={logoRef} onClick={handleClick}/>
          <img src={photo} className="photo" alt="photo" />
          <article className='AboutArticle'>
            <h2 className='AboutTitle'>Hello there</h2>
            <p className='AboutText'>
              I am Michael Chan, born in 1994 in Hong Kong.
              I live in Wirral working as a web developer.
              I am proficient in HTML, CSS, Scss, JavaScript, and React.
            </p>
            <p className='AboutText'>
              I am also familiar with Figma, Python, and SQLite.
              I am a quick learner and always looking to expand my knowledge and skill set.
            </p>
          </article>

        </section>
    )
}

export default About;