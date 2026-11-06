import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

function DownloadButton({ href }: { href: string }) {
  return (
    <Link href={href} isExternal _hover={{ textDecoration: "none" }}>
      <Button size="sm" colorScheme="teal" leftIcon={<DownloadIcon />}>
        Download paper
      </Button>
    </Link>
  );
}

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
        {/* Paper 1 */}
        <Box>
          <Heading as="h2" size="lg">
            Improving biodiversity protection through artificial intelligence
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Sterner, T., and Antonelli, A. (2022)
            Nature Sustainability
          </Heading>
          <DownloadButton href="papers/Silvestro_et_al_2022_NatSust.pdf" />
        </Box>
        <Box>
          <Image src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-00851-6/MediaObjects/41893_2022_851_Fig1_HTML.png?as=webp" />
        </Box>

        {/* Paper 2 */}
        <Box>
          <Heading as="h2" size="lg">
            Using artificial intelligence to optimize ecological restoration for
            climate and biodiversity
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Groom, B., Sterner, T., and Antonelli, A.
            (2025) bioRxiv
          </Heading>
          {/* Unversioned link: always the latest version of the preprint */}
          <DownloadButton href="https://www.biorxiv.org/content/10.1101/2025.01.31.635975.full.pdf" />
        </Box>
        <Box>
          <Image src="/images/one_sim.png" />
        </Box>

        {/* Paper 3 */}
        <Box>
          <Heading as="h2" size="lg">
            The 30 by 30 biodiversity commitment and financial disclosure: metrics matter
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Groom B., Sterner T., and Antonelli, A. (2025)
            Current Opinion in Environmental Sustainability
          </Heading>
          <DownloadButton href="papers/Silvestro_2025COSUST.pdf" />
        </Box>
        <Box>
          <Image src="/images/30by30.jpg"/>
        </Box>

        {/* Paper 4 */}
        <Box>
          <Heading as="h2" size="lg">
            Reconciling top-down and bottom-up conservation priorities with
            reinforcement learning from human feedback
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Rau, E-P., Sterner, T., and Antonelli, A. (2026)
            Environmental Research Letters
          </Heading>
          <DownloadButton href="https://iopscience.iop.org/article/10.1088/1748-9326/aea2ab/pdf" />
        </Box>
        <Box>
          <Image
            src="/images/rlhf.jpg"
            alt="Conservation planning with reinforcement learning, refined with feedback from local communities"
          />
        </Box>

      </SimpleGrid>

      {/* Abstract and other content remains the same */}
    </Box>
  );
}
