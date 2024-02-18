import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const links = [
    {
        icon: faEnvelope,
        url: 'mailto:michael27mic@gmail.com',
        label: 'Email',
    },
    {
      icon: faGithub,
      url: 'https://github.com/mgj0226',
      label: 'GitHub',
    },
    {
        icon: faLinkedin,
        url: "http://www.linkedin.com/in/chun-nam-chan-149b13292",
        label: 'LinkedIn',
    },
];

export default function Footer() {
    return (
        <footer className="Footer">
            {/* Contact me */}
            {/* links to LinkedIn and GitHub */}
        </footer>
    );
};