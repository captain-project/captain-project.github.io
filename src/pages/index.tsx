import {
  Heading,
  Text,
  Box,
  Flex,
  SimpleGrid,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        as="section"
        bgImage="/images/pexels-photo-2606532.jpeg"
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

      <Box as="main" py={20}>
        <SimpleGrid
          as="article"
          columns={{ base: 1, lg: 2 }}
          spacing={"8rem"}
          mx="auto"
          px="1rem"
          maxWidth={{ base: "60ch", lg: "120ch" }}
        >
          <Box>
            <Heading as="h2" size="xl" id="download">
              How do we best protect biodiversity in a rapidly changing world
              with a limited budget?
            </Heading>

            <Text mt={8}>
              Climate change and ... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus commodi optio illo ipsa vitae
              repellendus exercitationem fugiat excepturi! Itaque beatae nam
              totam doloribus quasi doloremque illum eligendi corporis esse
              fuga.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/figure-1.jpg"
              alt="Forestry"
              borderRadius="xl"
            />
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Solution: Conservation area prioritization through artificial
              intelligence
            </Heading>

            <Text mt={8}>
              We use reinforcement learning to ... lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus commodi optio illo ipsa
              vitae repellendus exercitationem fugiat excepturi! Itaque beatae
              nam totam doloribus quasi doloremque illum eligendi corporis esse
              fuga.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/RL_framework_researchstat_thumb.png"
              alt="Captain flow"
            />
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Captain protects more species than Marxan
            </Heading>

            <Text mt={8}>
              Depending on the settings, we protect ... lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus commodi optio illo
              ipsa vitae repellendus exercitationem fugiat excepturi! Itaque
              beatae nam totam doloribus quasi doloremque illum eligendi
              corporis esse fuga.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/performance.png"
              alt="Captain vs Marxan performance"
            />
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Customized prioritization targets
            </Heading>

            <Text mt={8}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              commodi optio illo ipsa vitae repellendus exercitationem fugiat
              excepturi! Itaque beatae nam totam doloribus quasi doloremque
              illum eligendi corporis esse fuga.
            </Text>
          </Box>
          <Box textAlign="center" fontSize="sm">
            <HStack spacing={4} align="start">
              <VStack w="30%">
                <Image
                  src="/images/min-species-loss.png"
                  alt="Minimize species loss"
                />
                <Text as="figcaption">Minimize species loss</Text>
              </VStack>
              <VStack w="30%">
                <Image
                  src="/images/max-carbon-storage.png"
                  alt="Maximize carbon storage"
                />
                <Text as="figcaption">Maximize carbon storage</Text>
              </VStack>
              <VStack w="30%">
                <Image
                  src="/images/max-protected-area.png"
                  alt="Maximize protected area"
                />
                <Text as="figcaption">Maximize protected area</Text>
              </VStack>
            </HStack>
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Download
            </Heading>
            <Text mt={5}>
              A desktop app is coming soon. The Python source code is available
              on <a href="//github.com/captain-project/captain">GitHub</a>.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
