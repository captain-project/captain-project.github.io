import Head from "next/head";
import NextImage from "next/image";
import styles from "../styles/Home.module.css";
import {
  Container,
  Box,
  HStack,
  VStack,
  Heading,
  Link,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BookmarkIcon } from "@heroicons/react/solid";
import { Header } from "./components/Header";
import { Figures } from "./components/Figures";
import { Footer } from "./components/Footer";
import frameworkImage from "../public/images/RL_framework_researchstat_thumb.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Captain</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box as="main">
        <Container mb={5}>
          <Heading as="h2" size="md" mb={4}>
            Supplementary information for
          </Heading>
          <Box
            p={8}
            bgGradient="linear(to-b, gray.50, gray.100)"
            boxShadow="inner"
            rounded="sm"
          >
            <HStack align="top" spacing={4}>
              <Icon as={BookmarkIcon} w={6} h={6} color="gray.400" mt={1} />
              <Text fontSize="sm">
                Silvestro, D., Goria, S., Sterner, T., and Antonelli, A. (2021),
                <br />
                <strong>
                  Optimising biodiversity protection through artificial
                  intelligence.
                </strong>
                <br />
                <Link
                  href="papers/Silvestro_et_al_Main_revised_incl_Methods.pdf"
                  isExternal
                >
                  PDF <ExternalLinkIcon mx="2px" mt="-2px" />
                </Link>
              </Text>
            </HStack>
          </Box>
        </Container>

        <Container pos="relative" mb={10}>
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
          <VStack fontSize="md" pt={10} px={10} mb={10}>
            <Text>
              Over a million species face extinction, carrying with them untold options for food
              medicine, fibre, shelter, ecological resilience, aesthetic and cultural values. There is therefore
              an urgent need to design conservation policies that maximise the protection of biodiversity and
              its contributions to people, within the constraints of limited budgets.
            </Text>
            <Text>
              Here we present a novel framework for spatial conservation prioritisation that combines simulation models,
              reinforcement learning and ground validation to identify optimal policies. Our methodology,
              CAPTAIN (Conservation Area Prioritisation Through Artificial Intelligence Networks),
              quantifies the trade-off between the costs and benefits of area and biodiversity protection,
              allowing the exploration of multiple biodiversity metrics.
            </Text>
            <Text>
              Under a fixed budget, our model
              protects substantially more species from extinction than the random or naively targeted
              protection of areas. CAPTAIN also outperforms the most widely used software for spatial
              conservation prioritisation (Marxan) in 97% of cases and reduces species loss by an average of
              40% under simulations, besides yielding prioritisation maps at substantially higher spatial
              resolution using empirical data.
            </Text>
            <Text>
              We find that regular biodiversity monitoring, even if simple
              and with a degree of inaccuracy – characteristic of citizen science surveys – substantially
              improves biodiversity outcomes. Given the complexity of people–nature interactions and
              wealth of associated data, artificial intelligence holds great promise for improving the
              conservation of biological and ecosystem values in a rapidly changing and resource-limited
              world.
            </Text>
          </VStack>

          <Link href="/images/RL_framework_researchstat.png" isExternal>
            <NextImage src={frameworkImage} alt="Framework" layout="responsive" loading="eager" />
          </Link>
        </Container>

        <Figures />
      </Box>

      <Footer />
    </div>
  )
}
