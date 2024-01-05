import {Box, Flex} from "@chakra-ui/react";
import ScrollToTopButton from "../buttons/ScollToTopButton";

function Footer() {
    return(
        <Box
            bg= "#001840"
            style={{
                position: "fixed",
                bottom: "0",
                width: "100%",
            
            }}
        >
            <footer>
                <Flex
                    margin="0 auto"
                    px={12}
                    color='white'
                    justifyContent="center"
                    alignItems="center"
                    maxWidth=""
                    height={20}
                >
                    <Box fontSize="lg">Michael • © 2024</Box>
                    <ScrollToTopButton/>
                </Flex>
            </footer>
        </Box>
    )
}

export default Footer;