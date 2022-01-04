import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { Box, Flex, Heading, List, ListItem, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      pos={["absolute", "absolute", "fixed"]}
      top={0}
      zIndex={9999}
      bg="hsl(0 0% 0% / 0.7)"
      align="center"
      w="100%"
      py={6}
      px={[2, 6, 12, 20]}
    >
      <Box>
        <Link href="/">
          <a>
            <Heading
              as="h1"
              size="2xl"
              letterSpacing="tighter"
              display="block"
              bgGradient="linear(to-tl, #FCE38A, #F38181)"
              bgClip="text"
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
          </a>
        </Link>
      </Box>

      <Spacer />

      <Box as="nav" color="white">
        <List
          role="navigation"
          className={styles.navigation}
          display={["block", "block", "flex"]}
          gap={2}
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
            <Link href="/publications">
              <a>Publications</a>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
