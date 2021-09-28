import Head from "next/head";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import styles from "../styles/Home.module.css";
import {
  Container,
  Center,
  Box,
  HStack,
  VStack,
  Heading,
  IconButton,
  Button,
  Link,
  ButtonGroup,
  Image,
  Wrap,
  WrapItem,
  SimpleGrid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
  Text,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  PlayIcon,
  StopIcon,
  RefreshIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";

const getImage = (frame: number, plot: number, format: string = "svg") =>
  `/plots/prioritize_species_0_step${frame}_.pkl_p${plot}.${format}`;

const plotIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const MAX_FRAME = 31;

const metaData = [
  {
    title: "Species richness",
    description: "Figure description missing.",
  },
  {
    title: "Population density",
    description: "Figure description missing.",
  },
  {
    title: "Total population size",
    description: "Figure description missing.",
  },
  {
    title: "Phylogenetic diversity",
    description: "Figure description missing.",
  },
  {
    title: "Disturbance",
    description: "Figure description missing.",
  },
  {
    title: "Mean annual temperature",
    description: "Figure description missing.",
  },
  {
    title: "Economic loss",
    description: "Figure description missing.",
  },
  {
    title: "Value and diversity",
    description: "Figure description missing.",
  },
  {
    title: "Species A", // 6
    description: "Figure description missing.",
  },
  {
    title: "Species B", // 12
    description: "Figure description missing.",
  },
  {
    title: "Species C", // 200
    description: "Figure description missing.",
  },
  {
    title: "Species D", // 350
    description: "Figure description missing.",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Home() {
  const [frame, setFrame] = useState(1);
  const [plot, setPlot] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let id = -1;
    if (isPlaying) {
      id = window.setInterval(() => {
        const maxFrame = 31;
        setFrame((frame) => {
          const nextFrame = clamp(frame + 1, 1, maxFrame);
          if (nextFrame === maxFrame) {
            window.clearTimeout(id);
            setIsPlaying(false);
          }
          return nextFrame;
        });
      }, 500);
    }
    return () => {
      if (id !== -1) {
        window.clearTimeout(id);
      }
    };
  }, [isPlaying]);

  const onFrameChange = (value: number) => setFrame(value);
  const onSelectPlot = (plotId: number) => setPlot(plotId);

  return (
    <div className={styles.container}>
      <Head>
        <title>Captain</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        style={{ cursor: "default" }}
        w="100%"
        h="200px"
        bgGradient="linear(to-br, #184E68, #57CA85)"
        p={6}
        mb={20}
      >
        <Box w="200px" mb={2}>
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-tl, #FCE38A, #F38181)"
            bgClip="text"
          >
            Captain
          </Heading>
        </Box>
        <Heading as="h4" size="sm" fontWeight="normal" color="white">
          Conservation Area Prioritization Through AI Networks
        </Heading>
      </Box>

      <Container mb={20}>
        <VStack>
          <Heading as="h2" size="md" mb={4}>
            Supplementary information for
          </Heading>
          <Box
            p={8}
            mb={20}
            mx={4}
            bgGradient="linear(to-b, gray.50, gray.100)"
            boxShadow="inner"
            rounded="sm"
          >
            <HStack align="top" spacing={4}>
              <Icon as={BookmarkIcon} w={6} h={6} color="gray.400" mt={1} />
              <Text fontSize="sm">
                Antonelli, A., Goria, S., Sterner, T., and Silvestro, D. (2021).
                <br />
                <strong>
                  Optimising biodiversity protection through artificial
                  intelligence.
                </strong>
                <br />
                <Link
                  href="https://www.biorxiv.org/content/10.1101/2021.04.13.439752v1.abstract"
                  isExternal
                >
                  bioRxiv <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </HStack>
          </Box>

          <Box pos="relative">
            <Heading
              fontFamily="Georgia, serif"
              as="span"
              fontSize="120px"
              bgGradient="linear(to-tl, #FCE38A, #F38181)"
              bgClip="text"
              position="absolute"
              left="-30px"
            >
              “
            </Heading>
            <VStack fontSize="md" pt={10} px={10}>
              <Text>
                Over a million species face extinction, carrying with them
                untold options for food, medicine, fibre, shelter, ecological
                resilience, aesthetic and cultural values. There is therefore an
                urgent need to design conservation policies that maximise the
                protection of biodiversity and its contributions to people,
                within the constraints of limited budgets.
              </Text>
              <Text>
                Here we propose a novel framework for spatial conservation
                prioritisation that combines simulation models, reinforcement
                learning and ground validation to identify optimal policies. Our
                model quantifies the trade-off between the costs and benefits of
                area and biodiversity protection, allowing the exploration of
                multiple biodiversity metrics. Under a fixed budget, our model
                protects substantially more species from extinction than the
                random or naively targeted protection of areas.
              </Text>
              <Text>
                We find that regular biodiversity monitoring, even if simple and
                with a degree of inaccuracy, substantially improves biodiversity
                outcomes. Given the complexity of people–nature interactions and
                wealth of associated data, artificial intelligence holds great
                promise for improving the conservation of biological and
                ecosystem values in a rapidly changing and resource-limited
                world.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>

      <SimpleGrid
        as="main"
        spacing="40px"
        mb={20}
        mx={10}
        px={10}
        columns={{ sm: 1, md: 2 }}
      >
        <Box>
          <Image htmlWidth={400} src={getImage(frame, plot)} />
          <HStack width={400} spacing="24px">
            <ButtonGroup isAttached variant="outline">
              <IconButton
                colorScheme="blue"
                aria-label="Restart"
                icon={<Icon as={RefreshIcon} />}
                fontSize={20}
                isDisabled={frame === 1}
                onClick={() => {
                  setIsPlaying(false);
                  setFrame(1);
                }}
              />
              <IconButton
                colorScheme="blue"
                aria-label={isPlaying ? "Stop" : "Play"}
                icon={<Icon as={isPlaying ? StopIcon : PlayIcon} />}
                isActive={isPlaying}
                fontSize={20}
                onClick={() => {
                  if (!isPlaying && frame === MAX_FRAME) {
                    setFrame(1);
                  }
                  setIsPlaying((isPlaying) => !isPlaying);
                }}
              />
            </ButtonGroup>
            <NumberInput
              maxW="100px"
              mr="2rem"
              inputMode="numeric"
              value={frame}
              onChange={(_, value) => onFrameChange(value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Slider
              aria-label="frame"
              min={1}
              max={MAX_FRAME}
              value={frame}
              onChange={onFrameChange}
              focusThumbOnChange={false}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </Box>
        <Box width={400}>
          <Heading as="h1" size="lg" my={4}>
            {metaData[plot].title}
          </Heading>
          <Text>{metaData[plot].description}</Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ sm: 3, md: 4, lg: 6 }}
        gap={4}
        p={10}
        mb={20}
        mx={4}
        bgGradient="linear(to-b, gray.50, gray.100)"
        boxShadow="inner"
        rounded="md"
      >
        {plotIds.map((plotId, key) => (
          <Box
            boxShadow={plotId === plot ? "outline" : "base"}
            rounded="md"
            bg="white"
            _hover={{
              boxShadow: "outline",
            }}
            role="group"
            key={key}
            onClick={() => onSelectPlot(plotId)}
            style={{ cursor: "pointer" }}
          >
            <Text
              mt={2}
              mx={2}
              fontSize="sm"
              color={plotId === plot ? "gray.900" : "gray.700"}
              fontWeight={plotId === plot ? "600" : "normal"}
            >
              {metaData[plotId].title}
            </Text>
            <Tooltip
              hasArrow
              fontSize="sm"
              shadow="dark-lg"
              label={metaData[plotId].description}
              placement="bottom"
              bg="gray.50"
              color="gray.600"
            >
              <Image
                rounded="md"
                key={plotId}
                htmlWidth={200}
                htmlHeight={200}
                src={getImage(frame, plotId, "jpg")}
              />
            </Tooltip>
          </Box>
        ))}
      </SimpleGrid>

      <Center
        as="footer"
        w="100%"
        h="600px"
        px={0}
        pt={40}
        pb={20}
        mx={0}
        bgImage="url(http://antonelli-lab.net/wp-content/themes/alab/img/footer_bg.jpg)"
        bgPosition="center top"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <a href="http://antonelli-lab.net/">
          <NextImage
            src="https://antonelli-lab.net/wp-content/uploads/2018/10/AntonelliLab_logo_v1_paths.svg"
            alt="Antonelli Lab Logo"
            width={320}
            height={70}
          />
        </a>
      </Center>
    </div>
  );
}
