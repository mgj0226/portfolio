import React from "react";
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

export default function Footer({menu}) {
    return (
        <Box className={`Footer ${menu}`}>
            <HStack>
                {links.map((link, index) => (
                    <Link key={index} href={link.url} isExternal>
                        <FontAwesomeIcon className={`FooterIcon`} icon={link.icon} size="2x" />
                    </Link>
                ))}
            </HStack>
        </Box>
    );
};