import { Avatar, Heading, VStack, Card } from "@chakra-ui/react";

const About = ({aboutTitleRef, aboutSubTitle1Ref, aboutSubTitle2Ref}) => {
    return(
        <VStack spacing={4} className="about">
            <Avatar className="aboutImg" name="Michael" src="https://media.licdn.com/dms/image/D5603AQHlioWaab7_Kg/profile-displayphoto-shrink_400_400/0/1704989447682?e=1710374400&v=beta&t=J8sf6PoNi_CQk0521Dp7BVvZsTshYrUulBR7VHTJP3U" />
            <Heading ref={aboutTitleRef} size="xl" className="aboutTitle">Michael</Heading>
            <Heading ref={aboutSubTitle1Ref} size="xl" className="aboutSubTitle1">Front-End React</Heading>
            <Heading ref={aboutSubTitle2Ref} size="xl" className="aboutSubTitle2">Developer</Heading>
            <Card className="aboutCard"></Card>
        </VStack>
    );
};

export default About;