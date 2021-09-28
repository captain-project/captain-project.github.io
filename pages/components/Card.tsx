import { Box, Text, Tooltip, Image } from '@chakra-ui/react';

export function Card({ title, description, src, isActive, onClick, ...props }: any) {
    return (
        <Box
            p={2}
            boxShadow={isActive ? "outline" : "base"}
            rounded="md"
            bg="white"
            maxWidth={200}
            _hover={{ boxShadow: "outline" }}
            onClick={onClick}
            style={{ cursor: "pointer" }}
            {...props}
        >
            <Text
                fontSize="sm"
                color={isActive ? "gray.900" : "gray.700"}
                fontWeight={isActive ? "600" : "normal"}
            >
                {title}
            </Text>
            <Tooltip
                hasArrow
                fontSize="sm"
                shadow="dark-lg"
                label={description}
                placement="bottom"
                bg="gray.50"
                color="gray.600"
            >
                <Image
                    rounded="md"
                    htmlWidth={200}
                    htmlHeight={200}
                    src={src}
                />
            </Tooltip>
        </Box>
    )
}