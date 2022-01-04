import { useState, useEffect } from "react";
import {
  Icon,
  SimpleGrid,
  Image as ChakraImage,
  HStack,
  IconButton,
  ButtonGroup,
  Text,
  Box,
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { PlayIcon, StopIcon, RefreshIcon } from "@heroicons/react/solid";
import Card from "./Card";
import metaData from "../../figure-metadata.json";

const getImage = (frame: number, plot: number, format: string = "svg") =>
  `/plots/prioritize_species_0_step${frame}_.pkl_p${plot}.${format}`;

const plotIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const MAX_FRAME = 31;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Figures() {
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

  useEffect(function preloadImages() {
    for (let frame = 1; frame <= MAX_FRAME; ++frame) {
      plotIds.forEach((plotId) => {
        const image = new Image();
        image.src = getImage(frame, plotId, "jpg");
        // @ts-ignore
        window[image.src] = image;
      });
    }
  }, []);

  return (
    <>
      <SimpleGrid
        spacing="40px"
        mt={2}
        mb={10}
        mx="auto"
        p={4}
        columns={{ base: 1, md: 2 }}
        maxWidth={{ base: "60ch", lg: "120ch" }}
      >
        <Box>
          <ChakraImage htmlWidth="100%" src={getImage(frame, plot)} />

          <HStack spacing="24px">
            <ButtonGroup isAttached variant="outline">
              <IconButton
                colorScheme="blue"
                aria-label="restart"
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
                aria-label={isPlaying ? "stop" : "play"}
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
              min={1}
              max={MAX_FRAME}
              onChange={(_, value) => setFrame(value)}
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
              onChange={setFrame}
              focusThumbOnChange={false}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </Box>

        <Box>
          <Heading as="h3" size="md" mt={{ base: 4, lg: 7 }}>
            {metaData[plot].title}
          </Heading>

          <Text mt={6}>{metaData[plot].description}</Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ sm: 3, md: 4, lg: 6 }}
        gap={4}
        mb={20}
        mx="auto"
        p={4}
        maxWidth={{ base: "60ch", lg: "120ch" }}
      >
        {plotIds.map((plotId) => (
          <Card
            key={plotId}
            title={metaData[plotId].title}
            description={metaData[plotId].description}
            src={getImage(frame, plotId, "jpg")}
            isActive={plot === plotId}
            onClick={() => setPlot(plotId)}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
