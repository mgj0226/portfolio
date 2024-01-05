import {Box, Flex} from "@chakra-ui/react";

function Footer() {
    return(
        <Box bg= "#18181b">
            <footer>
                <Flex
                    margin="0 auto"
                    px={12}
                    color='white'
                    justifyContent="center"
                    alignItems="center"
                    maxWidth=""
                    height={16}
                >
                    <p>Michael • © 2024</p>
                </Flex>
            </footer>
        </Box>
    )
}