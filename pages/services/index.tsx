import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { navbarRoutes } from "@/config/navbar-routes";
import { Footer } from "@/components/footer";
import NextLink from "next/link";

export default function ServicePage() {
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.05)",
    "rgba(255,255,255,0.08)"
  );
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  const mainnet = [
    {
      name: "CrossFi",
      logo: "https://pbs.twimg.com/profile_images/1719733805483790336/9rtdiMS-_400x400.jpg",
    },
    {
      name: "Self Chain",
      logo: "https://pbs.twimg.com/profile_images/1879603544120008704/z2WKYx3z_400x400.jpg",
    },
    {
      name: "Initia",
      logo: "https://pbs.twimg.com/profile_images/1919389207367491584/GFxs1SP5_400x400.png",
      link: "/services/mainnet/initia"
    },
  ];

  const testnet = [
    {
      name: "Empeiria",
      logo: "https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg",
      link: "/services/testnet/empeiria",
    },
    {
      name: "Symphony",
      logo: "https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg",
      link: "/services/testnet/symphony",
    },
    {
      name: "Warden",
      logo: "https://pbs.twimg.com/profile_images/1904848026742484992/nO3RP237_400x400.jpg",
      link: "/services/testnet/warden",
    },
  ];

  const renderGrid = (
    items: { name: string; logo: string; link?: string }[]
  ) => (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 5, lg: 6 }} spacing={4}>
      {items.map((item) => {
        const content = (
          <Flex
            border="1px solid"
            borderColor={border}
            borderRadius="full"
            align="center"
            justify="center"
            py={2}
            px={3}
            bg={cardBg}
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "md",
              borderColor: "whiteAlpha.400",
            }}
            transition="all 0.15s ease"
            cursor={item.link ? "pointer" : "default"}
          >
            <Image
              src={item.logo}
              alt={item.name}
              boxSize="40px"
              borderRadius="full"
              mr={2}
            />
            <Text fontWeight="medium" fontSize="sm" color={textColor}>
              {item.name}
            </Text>
          </Flex>
        );

        return (
          <Box key={item.name}>
            {item.link ? (
              <ChakraLink
                as={NextLink}
                href={item.link}
                _hover={{ textDecoration: "none" }}
              >
                {content}
              </ChakraLink>
            ) : (
              content
            )}
          </Box>
        );
      })}
    </SimpleGrid>
  );

  return (
    <>
      <Navbar routes={navbarRoutes} />
      <Box
        position="relative"
        minH="100vh"
        pt="100px"
        pb="16"
      >
        {/* Background blur efek */}
        <Box
          boxSize="72"
          position="absolute"
          top="0"
          left="0"
          bg="brand.500"
          borderRadius="full"
          filter="blur(400px)"
          pointerEvents="none"
        />
        <Box
          boxSize="72"
          position="absolute"
          bottom="0"
          right="0"
          bg="pink.500"
          borderRadius="full"
          filter="blur(400px)"
          pointerEvents="none"
        />

        {/* Content */}
        <Box
          position="relative"
          zIndex={1}
          px={{ base: 6, md: 20 }}
        >
          {/* Border frame di sekeliling konten */}
          <Box
            border="1px solid"
            borderColor={border}
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            boxShadow="0 0 20px rgba(0,0,0,0.1)"
            bg="transparent"
          >
            <Heading
              mb={2}
              fontSize="4xl"
              textAlign="center"
              bgGradient="linear(to-r, pink.400, orange.400)"
              bgClip="text"
            >
              Network Overview
            </Heading>
            <Text mb={8} fontSize="sm" opacity={0.7} textAlign="center">
              Explore supported networks across both mainnet and testnet
              environments.
            </Text>

            <Box mb={14}>
              <Heading mb={4} fontSize="xl">
                Mainnet
              </Heading>
              {renderGrid(mainnet)}
            </Box>

            <Box>
              <Heading mb={4} fontSize="xl">
                Testnet
              </Heading>
              {renderGrid(testnet)}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box position="relative" zIndex={10}>
        <Footer />
      </Box>
    </>
  );
}