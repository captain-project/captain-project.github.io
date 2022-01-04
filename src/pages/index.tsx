import { Container, Heading, Text, Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        as="section"
        bgImage="url('//images.pexels.com/photos/2606532/pexels-photo-2606532.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
        bgSize="cover"
        h="100vh"
        w="100%"
        p={2}
      >
        <Flex h="100%" justify="center" align="center">
          <Heading
            as="h2"
            size="3xl"
            letterSpacing="tight"
            color="#F6F8EA"
            textShadow="1px 1px 3px #0F2935"
          >
            The Captain Project
          </Heading>
        </Flex>
      </Box>

      <Box as="main" py={40}>
        <Container as="article">
          <Heading as="h2" size="xl" mt={30} id="download">
            Download
          </Heading>
          <Text mt={5}>
            A desktop app is coming soon. The Python source code is available on{" "}
            <a href="//github.com/captain-project/captain">GitHub</a>.
          </Text>
        </Container>
      </Box>
    </>
  );
}
