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
            <h2 className='AboutTitle'>Michael Chan</h2>
          </article>

        </section>
    )
}

export default About;