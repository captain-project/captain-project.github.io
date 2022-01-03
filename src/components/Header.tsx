import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { Box, Flex, Heading, List, ListItem, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      //bgGradient="linear(to-br, #184E68, #57CA85)"
      bg="blue.700"
      align="center"
      p={6}
      pr={12}
      mb={20}
    >
      <Box>
        <Heading
          as="h1"
          size="2xl"
          letterSpacing="tighter"
          display="block"
          bgGradient="linear(to-tl, #FCE38A, #F38181)"
          bgClip="text"
          sx={{ cursor: "default" }}
        >
          Captain
        </Heading>
        <Heading
          as="h4"
          size="sm"
          fontWeight="normal"
          color="gray.50"
          mt={1}
          ml={1}
        >
          Conservation Area Prioritization
          <br />
          Through Artificial Intelligence
        </Heading>
      </Box>

      <Spacer />

      <Box as="nav" color="white">
        <List
          role="navigation"
          className={styles.navigation}
          display={{ base: "block", md: "flex" }}
          gap={10}
        >
          <ListItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/#download">
              <a>Download</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/#team">
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
  );
}
