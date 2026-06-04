import {
  Button,
  Heading,
  Text,
  Box,
  Flex,
  SimpleGrid,
  Image,
  HStack,
  VStack,
  Link,
  Container,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { DownloadIcon, InfoIcon, SettingsIcon, RepeatIcon, SearchIcon, CheckIcon, TimeIcon } from "@chakra-ui/icons";
import Figures from "../components/Figures";

// Place this at the top of your file, right under your imports:
const RobotIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16.01" />
    <line x1="16" y1="16" x2="16" y2="16.01" />
    <path d="M9 2v3" />
    <path d="M15 2v3" />
  </svg>
);

const AppleStyleBotIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 6V2" />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
    
    <rect x="4" y="6" width="16" height="14" rx="3" />
    
    <path d="M2 11h2M20 11h2" />
    
    <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="11.5" r="1.5" fill="currentColor" />
    
    <rect x="8" y="15" width="8" height="2" rx="1" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Box
        as="section"
        bgImage="/images/dscr-lr.jpg"
        bgSize="cover"
        h="60vh"
        w="100%"
        p={2}
      >
        <Flex
          h="100%"
          justify="center"
          align="center"
          flexDir="column"
          mt={20}
          gap={10}
        >
          <Heading
            as="h1" 
            size="2xl" 
            letterSpacing="tight"
            color="#F6F8EA"
            textShadow="1px 1px 3px #0F2935"
            textAlign="center"
            maxW="30ch" 
            mx="auto"   
          >
            Spatial conservation and restoration planning using reinforcement learning
          </Heading>

          <HStack spacing={4} justify="center">
            <Link href="https://github.com/captain-project/captain3preview" isExternal>
              <Button bg="white" variant="solid" leftIcon={<DownloadIcon />}>
                Try Captain 3 Preview
              </Button>
            </Link>

            <Link href="https://github.com/captain-project/captain2" isExternal>
              <Button bg="white" variant="solid" leftIcon={<DownloadIcon />}>
                Download v.2
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Box>
      
      <Box as="main" py={10}>
          
        <Container maxW={{ base: "60ch", lg: "120ch" }} mb={20}>
          <Box 
            p={8} 
            px={{ base: 6, md: 20 }}
            borderRadius="xl" 
            bg="#F6F8EA"           
            color="#0F2935"       
            borderWidth="1px" 
            borderColor="#d1d5bc" 
            boxShadow="md"
          >
            <Heading as="h2" size="xl" color="#0F2935" mb={6}>
              CAPTAIN 3.0 is coming
            </Heading>
            
            <List spacing={4} fontSize="lg">
              <ListItem display="flex" alignItems="start">
                <ListIcon as={RepeatIcon} color="teal.600" mt={1} />
                <Box>
                  <Text as="strong" color="teal.800">Complete rewrite for high performance:</Text> 
                  {" "}Significant efficiency improvements and full GPU support enable 
                  analysis at larger scales and finer resolutions.
                </Box>
              </ListItem>

              <ListItem display="flex" alignItems="start">
                <ListIcon as={TimeIcon} color="teal.600" mt={1} />
                <Box>
                  <Text as="strong" color="teal.800">Dynamic environment scenarios:</Text> 
                  {" "}Advanced support for time-evolving scenarios, incorporating 
                   climate change projections and dynamic implementation costs.
                </Box>
              </ListItem>

              {/* New Addition: Spatially Distributed Regional Agents */}
			<ListItem display="flex" alignItems="start">
			  <ListIcon 
				as={AppleStyleBotIcon} 
				color="teal.600" 
				boxSize="1.25em" 
				minW="1.25em"    
				ml="-3px"      
				mr="7px"       
				mt="2px"        
			  />
			  <Box>
  				<Text as="strong" color="teal.800">Decentralized regional agents:</Text> 
				{" "}Features regional agents designed to optimize 
				spatially-distributed conservation strategies.
			  </Box>
			</ListItem>
              
              <ListItem display="flex" alignItems="start">
                <ListIcon as={SearchIcon} color="teal.600" mt={1} />
                <Box>
                  <Text as="strong" color="teal.800">Multi-objective optimization:</Text> 
                  {" "}Full support to quantify synergies and trade-offs between competing 
                  conservation and restoration targets.
                </Box>
              </ListItem>

              <ListItem display="flex" alignItems="start">
                <ListIcon as={SettingsIcon} color="teal.600" mt={1} />
                <Box>
                  <Text as="strong" color="teal.800">Modular & Customizable:</Text> 
                  {" "}A flexible framework allowing for highly tailored conservation policies 
                  and easier integration of custom data.
                </Box>
              </ListItem>

              <ListItem display="flex" alignItems="start">
                <ListIcon as={CheckIcon} color="teal.600" mt={1} />
                <Box>
                  <Text as="strong" color="teal.800">Enhanced Documentation:</Text> 
                  {" "}Comprehensive technical guides and examples to streamline 
                  the implementation of complex workflows.
                </Box>
              </ListItem>
            </List>
          </Box>
        </Container>

        <SimpleGrid
          as="article"
          columns={{ base: 1, lg: 2 }}
          spacing={"8rem"}
          mx="auto"
          px="1rem"
          maxWidth={{ base: "60ch", lg: "120ch" }}
        >
          <Box>
            <Heading as="h2" size="xl">
              How do we best protect biodiversity in a rapidly changing world
              and with limited resources?
            </Heading>
            <Text mt={8}>
              Over a million species face extinction, carrying with them untold
              options for food medicine, fibre, shelter, ecological resilience,
              aesthetic and cultural values. We urgently need to design
              conservation policies that maximize the protection of biodiversity
              and its contributions to people, within the constraints of limited
              budgets.
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
            <Heading as="h2" size="xl">
              Harnessing the power of AI to optimize conservation efforts
            </Heading>
            <Text mt={8}>
              We use reinforcement learning to train models for conservation
              prioritization that best use the available data and resources.
              CAPTAIN models can work with basic species distribution data but
              can handle complex multidimensional data and their temporal
              trends, including land use and climate change.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/RL_framework_researchstat_thumb.png"
              alt="Captain flow"
            />
          </Box>
        </SimpleGrid>

        <Container
          as="article"
          mt={32}
          maxWidth={{ base: "60ch", lg: "120ch" }}
        >
          <Box>
            <Heading as="h2" size="xl">
              A simulated natural system
            </Heading>
            <Text mt={8}>
              CAPTAIN uses simulations based on an individual-based spatially
              explicit model of biodiversity to train policies through
              Reinforcement Learning.
            </Text>
          </Box>
        </Container>

        <Figures />

        <SimpleGrid
          as="article"
          columns={{ base: 1, lg: 2 }}
          spacing={"8rem"}
          mx="auto"
          px="1rem"
          mt={20}
          maxWidth={{ base: "60ch", lg: "120ch" }}
        >
          <Box>
            <Heading as="h2" size="xl" id="download">
              Download
            </Heading>
            <Text mt={5}>
              CAPTAIN v.2 is available on <a href="//github.com/captain-project/captain2">GitHub</a>.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              Join the community
            </Heading>
            <Text mt={5}>
              Ask questions on <a href="//github.com/captain-project/captain/discussions">GitHub Discussions</a>.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}