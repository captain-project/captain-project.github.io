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

  const onFrameChange = (value: number) => setFrame(value);
  const onPlotClick = (plotId: number) => setPlot(plotId);

  return (
    <>
      <SimpleGrid
        spacing="40px"
        mb={20}
        mx={{ sm: 4, md: 4, lg: "auto" }}
        px={10}
        columns={{ sm: 1, md: 2 }}
        maxWidth={1000}
      >
        <Box>
          <ChakraImage htmlWidth={400} src={getImage(frame, plot)} />
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
              min={1}
              max={MAX_FRAME}
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
        mx={{ sm: 4, md: 4, lg: "auto" }}
        maxWidth={1000}
        bgGradient="linear(to-b, gray.50, gray.100)"
        boxShadow="inner"
        rounded="md"
      >
        {plotIds.map((plotId) => (
          <Card
            key={plotId}
            title={metaData[plotId].title}
            description={metaData[plotId].description}
            src={getImage(frame, plotId, "jpg")}
            isActive={plot === plotId}
            onClick={() => onPlotClick(plotId)}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
