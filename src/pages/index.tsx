import { Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Heading as="h2" size="xl">
        The Captain Project
      </Heading>

      <Text mt={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque
        iusto libero, est consequatur ad ipsum laborum reiciendis numquam
        distinctio magnam aperiam quisquam quae perspiciatis necessitatibus
        deserunt architecto non provident.
      </Text>

      <Heading as="h2" size="xl" mt={30} id="download">
        Download
      </Heading>

      <Text mt={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque
        iusto libero, est consequatur ad ipsum laborum reiciendis numquam
        distinctio magnam aperiam quisquam quae perspiciatis necessitatibus
        deserunt architecto non provident.
      </Text>

      <Heading as="h2" size="xl" mt={30} id="team">
        Team
      </Heading>

      <Text mt={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque
        iusto libero, est consequatur ad ipsum laborum reiciendis numquam
        distinctio magnam aperiam quisquam quae perspiciatis necessitatibus
        deserunt architecto non provident.
      </Text>
    </Container>
  );
}
