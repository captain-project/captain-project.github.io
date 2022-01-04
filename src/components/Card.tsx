import { Box, Text, Tooltip } from "@chakra-ui/react";

export default function Card({
  title,
  description,
  src,
  isActive,
  onClick,
  ...props
}: any) {
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
        boxShadow={isActive ? "xl" : "base"}
        rounded="sm"
        background={`url("${src}") -15px -15px no-repeat`}
        bgSize="100%"
        pos="relative"
        width={140}
        height={155}
        _hover={{ boxShadow: "lg" }}
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
  );
}
