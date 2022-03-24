import { Container, Box, Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Figures from "../components/Figures";

export default function Supplementary() {
  return (
    <Box as="main" pt="200">
      <Container as="article">
        <Heading as="h2" size="xl">
          Improving biodiversity protection through artificial intelligence
        </Heading>
        <Heading as="h3" size="sm" my={6}>
          Silvestro, D., Goria, S., Sterner, T., and Antonelli, A. (2022)
        </Heading>
        <Link
          href="papers/Silvestro_et_al_Main_revised_incl_Methods.pdf"
          isExternal
        >
          Download PDF <ExternalLinkIcon mx="2px" mt="-2px" />
        </Link>

        <Heading as="h3" size="md" mt={12}>
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
        </Text>

        <Heading as="h2" size="xl" mt={40}>
          A simulated natural system
        </Heading>
         <Text mt={8}>
          CAPTAIN uses simulations based on an individual-based spatially
           explicit model of biodiversity to train policies through 
           Reinforcement Learning. The simulations can include hundreds of
           species and millions of individuals and tracks global and local
           biodiversity changes resulting from natural processes of mortality,
           replacement and dispersal and from changes in anthropogenic 
           pressure and climate. Simlated systems are used to train models that
           can be then applied to empirical data and to becnhmark the outcome
           of different conservation policies and targets. 
         </Text>
      </Container>

      <Figures />
    </Box>
  );
}
