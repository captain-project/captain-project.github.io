import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { Box, Flex, Heading, List, ListItem, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="header"
      pos={["absolute", "absolute", "fixed"]}
      top={0}
      zIndex={9999}
      bg="hsl(0 0% 0% / 0.7)"
      w="100%"
    >
      <Flex
        py={6}
        px="1rem"
        maxWidth={{ base: "60ch", lg: "120ch" }}
        mx="auto"
        align="center"
      >
        <Link href="/">
          <a tabIndex={-1}>
            <Flex justify="space-between" align="center" wrap="wrap" mr={4}>
              <Heading
                as="h1"
                size="2xl"
                letterSpacing="tighter"
                bgGradient="linear(to-tl, #FCE38A, #F38181)"
                bgClip="text"
                mr={4}
              >
                CAPTAIN
              </Heading>
              <Heading
                as="h2"
                size="sm"
                fontWeight="normal"
                color="gray.300"
                display={{ base: "none", lg: "block" }}
                mt={1}
                ml={1}
              >
                Conservation Area Prioritization
                <br />
                Through Artificial INtelligence
              </Heading>
            </Flex>
          </a>
        </Link>

        <Spacer />

        <Box as="nav" color="white">
          <List
            role="navigation"
            className={styles.navigation}
            display={["block", "flex"]}
            gap={2}
          >
            <ListItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/captain-project/captain-project">
                <a>Download</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/team">
                <a>Team</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/publications">
                <a>Publications</a>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}
