import React, {useCallback, useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const links = [
    {
        icon: faEnvelope,
        url: 'mailto:michael27mic@gmail.com',
        label: 'Email',
    },
    {
        icon: faLinkedin,
        url: "linkedin.com/in/chun-nam-chan-149b13292",
        label: 'LinkedIn',
    },
];

const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const Header = () => {
    const headerRef = useRef();
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
            headerRef.current.style.transform = "translateY(-100%)";
        } else {
            headerRef.current.style.transform = "translateY(0)";
        }

        setPrevScrollPos(currentScrollPos);
    };
    const debouncedHandleScroll = useCallback(debounce(handleScroll, 100), [prevScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', debouncedHandleScroll);

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [debouncedHandleScroll]);

    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
    
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: offsetTop - 100,
            behavior: 'smooth',
          });
        }
      };
    
    return (
        <Box
          className="header"
          ref={headerRef}
          position="fixed"
          top={0}
          left={0}
          right={0}
          transitionProperty="transform"
          transitionDuration=".3s"
          transitionTimingFunction="ease-in-out"
          backgroundColor="#001840"
          zIndex={10}
        >
          <Box color="white" maxWidth="1280px" margin="0 auto">
            <HStack
              px={16}
              py={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <nav>
                <HStack spacing="16px">
                    {links.map(({icon, url}) => (
                        <Link
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            isExternal
                            tabIndex={0}
                            _hover={{ color: 'gray.300', transform: 'scale(1.1)' }}
                            aria-label="links.label"
                        >
                            <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                        </Link>
                    ))}
                </HStack>
              </nav>
              <nav>
                <HStack spacing={8}>
                    <Link href="/#about" onClick={handleClick('about')} fontSize="lg">About Me</Link>
                    <Link href="/#skills" onClick={handleClick('skills')} fontSize="lg">Skills</Link>
                    <Link href="/#experiences" onClick={handleClick('experiences')} fontSize="lg">Experiences</Link>
                    <Link href="/#cert" onClick={handleClick('cert')} fontSize="lg">Certifications</Link>
                    <Link href="/#projects" onClick={handleClick('projects')} fontSize="lg">Projects</Link>
                </HStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      );
};

export default Header;