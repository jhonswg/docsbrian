import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchButton } from "@/components/search-button";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { FC } from "react";interface HeroProps extends StackProps {}const Hero: FC<HeroProps> = () => {
  const router = useRouter();  return (
    <Stack
      position="relative"
      maxW="container.md"
      py="12"
      mx="auto"
      mt="70"
      spacing="6"
      align="center"
      minHeight="60vh"
      justify="center"
      transform={{ base: "translateY(10%)", md: "translateY(5%)" }} // Geser sedikit ke bawah, lebih kecil di desktop
      // py={{ base: 8, md: 12 }}
    >
      <Flex
        direction="row"
        alignItems="center"
        blendMode="luminosity"
        zIndex="1"
      >
        <Button
          maxW="60"
          size="sm"
          colorScheme="whiteAlpha"
          color={useColorModeValue("gray.600", "white")}
          shadow="lg"
          border="1px"
          borderColor={useColorModeValue("white", "whiteAlpha.300")}
          borderRadius="full"
          rightIcon={<Icon as={RiArrowRightLine} />}
          onClick={() => router.push("/docs/mdx")}
        >
          Stake with us !
        </Button>
        {/* <SearchButton
          w="52"
          display={{ base: "none", lg: "flex" }}
          size="lg"
          shadow="lg"
          border="1px"
          borderColor={useColorModeValue("white", "whiteAlpha.300")}
          borderRadius="lg"
          ml="4"
        /> */}
      </Flex>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "7xl" }} 
        color={useColorModeValue("gray.700", "gray.100")}
        textAlign="center"
        textTransform="uppercase"
        lineHeight="0.5"
        zIndex="1"
        blendMode="luminosity"
      >
        Proof of Stake
      </Heading>
      <Heading
        as="h3"
        fontSize={{ base: "3xl", md: "6xl" }} 
        color={useColorModeValue("purple.600", "purple.300")}
        textAlign="center"
        textTransform="uppercase"
        lineHeight="1"
        zIndex="1"
        blendMode="luminosity"
      >
        Node Validator
      </Heading>
      <Text
        fontSize={{ base: "md", md: "l" }}
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.100")}
        textAlign="center"
        letterSpacing="tighter"
        zIndex="1"
        blendMode="luminosity"
      >
        We are committed, enthusiastic, and thrifty in operating nodes for
        blockchain projects, always up to date with industry developments, and
        eager to contribute to the advancement of blockchain technology through
        efficient node operations.
      </Text>
      <Box
        boxSize="72"
        position="absolute"
        top="0"
        left="0"
        bg="brand.500"
        borderRadius="full"
        filter="blur(140px)"
      />
      <Box
        boxSize="72"
        position="absolute"
        bottom="0"
        right="0"
        bg="pink.500"
        borderRadius="full"
        filter="blur(140px)"
      />
    </Stack>
  );
};export default Hero;

