import { FC } from "react";
import { Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const Logo: FC = () => {
  // Warna teks adaptif
  const textColor = useColorModeValue("black", "gray.400");

  // 🔹 Logo: putih di light mode, normal di dark mode
  const logoFilter = useColorModeValue("invert(1)", "invert(0)");

  return (
    <Flex alignItems="center">
      <Image
        src="/logo/logo.png"
        alt="Jhonswg Logo"
        boxSize="30px"
        filter={logoFilter} // 🔹 ubah warna sesuai mode
        transition="filter 0.2s ease"
      />
      <Heading
        ml="2"
        fontSize="2xl"
        color={textColor}
        display={{ base: "block", md: "block" }}
        cursor="pointer"
        transition="color 0.2s ease"
        _hover={{ color: useColorModeValue("brand.600", "brand.400") }}
      >
        Jhonswg
      </Heading>
    </Flex>
  );
};

export default Logo;
