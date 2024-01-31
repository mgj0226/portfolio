import {Box, Flex} from "@chakra-ui/react";
import ScrollToTopButton from "../buttons/ScollToTopButton";

function Footer() {
    return(
        <Box className="footer">
            <footer>
                <Flex
                    className="footerFlex"
                >
                    <Box className="footerName">Michael • © 2024</Box>
                    
                </Flex><ScrollToTopButton/>
            </footer>
        </Box>
    )
}

export default Footer;