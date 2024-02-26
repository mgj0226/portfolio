import React, {useRef} from 'react';
import LemonHome1 from '../assets/LemonHome1.png';
import LemonHome2 from '../assets/LemonHome2.png';
import LemonBooking1 from '../assets/LemonBooking1.png';

const Projects = ( {page, setPage} ) => {
    if (page === 'Projects') {
        var scale = 'ProjectsMax';
    } else if (page === 'About') {
        scale = 'scaleIn';
    } else {
        scale = 'scaleOut';
    }
    const handleTitleClick = () => {
        if (page !== 'Projects') {
                setPage('Projects');
        } else {
                setPage('About');
        };
    }


    return (
        <section
            className={`Projects ${scale}`}>
        <h1 className='ProjectsTitle' onClick={handleTitleClick}>Projects</h1>
        <div className="Project">
            <div className="Projectbox">
                <h3>Little Lemon</h3>
                <div className="ProjectImgs">
                    <img src={LemonHome1} alt="Little Lemon Home Page" />
                    <img src={LemonHome2} alt="Little Lemon Home Page" />
                    <img src={LemonBooking1} alt="Little Lemon Booking Page" />
                </div>
            </div>
            <div className="Projectbox">
                <h3>Coming Soon</h3>
            </div>
            <div className="Projectbox">
                <h3>Coming Soon</h3>
            </div>
            <div className="Projectbox">
                <h3>More</h3>
            </div>
        </div>
        </section>
    )
}

export default Projects;