import { Center } from "@chakra-ui/react";
import Image from "next/image";

export function Footer() {
    return <Center
        as="footer"
        w="100%"
        h="600px"
        px={0}
        pt={40}
        pb={20}
        m={0}
        bgImage="url(http://antonelli-lab.net/wp-content/themes/alab/img/footer_bg.jpg)"
        bgPosition="center top"
        bgRepeat="no-repeat"
        bgSize="cover"
    >
        <a href="http://antonelli-lab.net/">
            <Image
                src="https://antonelli-lab.net/wp-content/uploads/2018/10/AntonelliLab_logo_v1_paths.svg"
                alt="Antonelli Lab Logo"
                width={320}
                height={70}
            />
        </a>
    </Center>
}