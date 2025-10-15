import { FC } from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";

const Logo: FC = () => {
  return (
    <Flex alignItems="center"
    >
      <Image
        src="/logo/logo.png" // pastikan path-nya benar
        alt="Jhonswg Logo"
        boxSize="30px"
      />
      <Heading
        ml="2"
        fontSize="2xl"
        color="gray.400"
        display={{ base: "none", md: "block" }}
        cursor="pointer"
        transition="color 0.2s ease"
        _hover={{ color: "brand.500" }} 
      >
        Jhonswg
      </Heading>
    </Flex>
  );
};

export default Logo;
