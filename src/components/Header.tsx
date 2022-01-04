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
              Captain
            </Heading>
            <Heading
              as="h4"
              size="sm"
              fontWeight="normal"
              color="gray.300"
              textShadow="1px 1px 3px #0F2935"
              display={{ base: "none", lg: "block" }}
              mt={1}
              ml={1}
            >
              Conservation Area Prioritization
              <br />
              Through Artificial Intelligence
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
