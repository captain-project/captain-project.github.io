import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
    return <Box
        as="header"
        style={{ cursor: "default" }}
        w="100%"
        bgGradient="linear(to-br, #184E68, #57CA85)"
        p={6}
        mb={20}
    >
        <Box w="200px" mb={1}>
            <Heading
                as="h1"
                size="2xl"
                bgGradient="linear(to-tl, #FCE38A, #F38181)"
                bgClip="text"
            >
                Captain
            </Heading>
        </Box>
        <Heading as="h4" size="sm" fontWeight="normal" color="gray.50" mb={2} ml={1}>
            Conservation Area Prioritization Through Artificial INtelligence
        </Heading>
    </Box>
}
