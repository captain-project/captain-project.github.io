import {
  Container,
  Box,
  Heading,
  Link,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Supplementary() {
  return (
    <Box as="main" pt="200">
      <SimpleGrid
        as="article"
        columns={{ base: 1, lg: 2 }}
        spacing={"8rem"}
        mx="auto"
        px="1rem"
        mb={100}
        maxWidth={{ base: "60ch", lg: "120ch" }}
      >
        <Box>
          <Heading as="h2" size="xl">
            Improving biodiversity protection through artificial intelligence
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Sterner, T., and Antonelli, A. (2022)
            Nature Sustainability, DOI:
            <Link
              href="https://www.nature.com/articles/s41893-022-00851-6"
              isExternal
            >
              10.1038/s41893-022-00851-6 <ExternalLinkIcon mx="2px" mt="-2px" />
            </Link>
          </Heading>
          <Link href="papers/Silvestro_et_al_2022_NatSust.pdf" isExternal>
            Download open access article:{" "}
            <ExternalLinkIcon mx="2px" mt="-2px" />
          </Link>
        </Box>
        <Box>
          <Image src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-00851-6/MediaObjects/41893_2022_851_Fig1_HTML.png?as=webp" />
        </Box>
        <Box>
          <Heading as="h2" size="xl">
            Using artificial intelligence to optimize ecological restoration for
            climate and biodiversity
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Groom, B., Sterner, T., and Antonelli, A.
            (2025) bioRxiv, DOI:
            <Link href="https://doi.org/10.1101/2025.01.31.635975" isExternal>
              10.1101/2025.01.31.635975 <ExternalLinkIcon mx="2px" mt="-2px" />
            </Link>
          </Heading>
        </Box>
        <Box>
          <Image src="/images/one_sim.png" />
        </Box>
        <Box></Box>
      </SimpleGrid>

      {/* <Heading as="h3" size="md" mt={12}>
          Abstract
        </Heading>

        <Text mt={8}>
          Over a million species face extinction, carrying with them untold
          options for food medicine, fibre, shelter, ecological resilience,
          aesthetic and cultural values. There is therefore an urgent need to
          design conservation policies that maximise the protection of
          biodiversity and its contributions to people, within the constraints
          of limited budgets.
        </Text>
        <Text mt={8}>
          Here we present a novel framework for spatial conservation
          prioritisation that combines simulation models, reinforcement learning
          and ground validation to identify optimal policies. Our methodology,
          CAPTAIN (Conservation Area Prioritisation Through Artificial
          INtelligence), quantifies the trade-off between the costs and
          benefits of area and biodiversity protection, allowing the exploration
          of multiple biodiversity metrics.
        </Text>
        <Text mt={8}>
          Under a fixed budget, our model protects substantially more species
          from extinction than the random or naively targeted protection of
          areas. CAPTAIN also outperforms the most widely used software for
          spatial conservation prioritisation (Marxan) in 97% of cases and
          reduces species loss by an average of 40% under simulations, besides
          yielding prioritisation maps at substantially higher spatial
          resolution using empirical data.
        </Text>
        <Text mt={8} mb={8}>
          We find that regular biodiversity monitoring, even if simple and with
          a degree of inaccuracy – characteristic of citizen science surveys –
          substantially improves biodiversity outcomes. Given the complexity of
          people–nature interactions and wealth of associated data, artificial
          intelligence holds great promise for improving the conservation of
          biological and ecosystem values in a rapidly changing and
          resource-limited world.
        </Text> */}
    </Box>
  );
}
