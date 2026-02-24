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
        {/* Paper 1 */}
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
              {" "}10.1038/s41893-022-00851-6 <ExternalLinkIcon mx="2px" mt="-2px" />
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

        {/* Paper 2 */}
        <Box>
          <Heading as="h2" size="xl">
            Using artificial intelligence to optimize ecological restoration for
            climate and biodiversity
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Groom, B., Sterner, T., and Antonelli, A.
            (2025) bioRxiv, Open access paper:
            <Link href="https://doi.org/10.1101/2025.01.31.635975" isExternal>
              {" "}10.1101/2025.01.31.635975 <ExternalLinkIcon mx="2px" mt="-2px" />
            </Link>
          </Heading>
        </Box>
        <Box>
          <Image src="/images/one_sim.png" />
        </Box>

        {/* Paper 3 (New Addition) */}
        <Box>
          <Heading as="h2" size="xl">
            The 30 by 30 biodiversity commitment and financial disclosure: metrics matter
          </Heading>
          <Heading as="h3" size="sm" my={6}>
            Silvestro, D., Goria, S., Groom B., Sterner T., and Antonelli, A. (2025) 
            Current Opinion in Environmental Sustainability, Open access paper:
            <Link href="https://doi.org/10.1016/j.cosust.2025.101587" isExternal>
              {" "}10.1016/j.cosust.2025.101587 <ExternalLinkIcon mx="2px" mt="-2px" />
            </Link>
          </Heading>
        </Box>
        <Box>
          <Image src="/images/30by30.jpg"/>
        </Box>

      </SimpleGrid>

      {/* Abstract and other content remains the same */}
    </Box>
  );
}