import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Image,
    Link as ChakraLink,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { Navbar } from "@/components/navbar";
  import { navbarRoutes } from "@/config/navbar-routes";
  import NextLink from "next/link";
  
  export default function ServicePage() {
    const cardBg = useColorModeValue("gray.50", "whiteAlpha.100");
    const border = useColorModeValue("gray.200", "whiteAlpha.200");
  
    const mainnet = [
      { name: "CrossFi", logo: "https://pbs.twimg.com/profile_images/1719733805483790336/9rtdiMS-_400x400.jpg" },
      { name: "Self Chain", logo: "https://pbs.twimg.com/profile_images/1879603544120008704/z2WKYx3z_400x400.jpg" },
      { name: "Initia", logo: "https://pbs.twimg.com/profile_images/1919389207367491584/GFxs1SP5_400x400.png" },
    ];
  
    const testnet = [
      { name: "Empeiria", logo: "https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg" },
      { name: "Symphony", logo: "https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg" },
      { name: "Warden", logo: "https://pbs.twimg.com/profile_images/1904848026742484992/nO3RP237_400x400.jpg" },
    ];
  
    const renderGrid = (items: { name: string; logo: string }[]) => (
      <SimpleGrid columns={{ base: 2, sm: 3, md: 5, lg: 6 }} spacing={4}>
        {items.map((item) => (
          <Flex
            key={item.name}
            border="1px solid"
            borderColor={border}
            borderRadius="full"
            align="center"
            justify="center"
            py={2}
            px={3}
            bg={cardBg}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            transition="all 0.15s ease"
          >
            <Image
              src={item.logo}
              alt={item.name}
              boxSize="50px"
              borderRadius="full"
              mr={2}
            />
            <Text fontWeight="medium" fontSize="sm">
              {item.name}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    );
  
    return (
      <>
        <Navbar routes={navbarRoutes} />
        <Box pt="90px" pb="16" px={{ base: 6, md: 20 }}>
          <Heading mb={4}>Mainnet</Heading>
          {renderGrid(mainnet)}
  
          <Heading mt={14} mb={4}>Testnet</Heading>
          {renderGrid(testnet)}
  
          {/* <Box mt={14}>
            <Heading as="h3" size="md" mb={2}>
              Validator Links
            </Heading>
            <Text>
              All ITRocket validator links –{" "}
              <ChakraLink
                as={NextLink}
                href="https://itrocket.net/delegate"
                color="blue.500"
                isExternal
              >
                https://itrocket.net/delegate
              </ChakraLink>
            </Text>
          </Box> */}
        </Box>
      </>
    );
  }
  