import { Box, Text, Tooltip } from '@chakra-ui/react';

export function Card({ title, description, src, isActive, onClick, ...props }: any) {
    return (
        <Tooltip
            hasArrow
            fontSize="sm"
            shadow="dark-lg"
            label={description}
            placement="bottom"
            bg="gray.50"
            color="gray.600"
        >
            <Box
                p={3}
                boxShadow={isActive ? "outline" : "base"}
                rounded="md"
                background={`linear-gradient(transparent 67%, white 72%), url("${src}") -15px -15px no-repeat`}
                bgSize="120%"
                pos="relative"
                width={140}
                height={155}
                _hover={{ boxShadow: "outline" }}
                onClick={onClick}
                style={{ cursor: "pointer" }}
                {...props}
            >
                <Text
                    pos="absolute"
                    bottom={7}
                    display="block"
                    height={3}
                    fontSize={12}
                    color={isActive ? "gray.900" : "gray.700"}
                    fontWeight={isActive ? "600" : "normal"}
                >
                    {title}
                </Text>
            </Box>
        </Tooltip>
    )
}