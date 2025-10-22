import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image as ChakraImage,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { DefaultLayout } from "@/layouts";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
// import { Teams } from "@/components/teams";
import { Features } from "@/components/features";
import { Tweets } from "@/components/tweets";
import { TestnetArchive } from "@/components/testnetArchive";

const networks = [
  // === Mainnet ===
  {
    name: "CrossFi",
    id: "crossfi-testnet-1",
    logo: "https://pbs.twimg.com/profile_images/1719733805483790336/9rtdiMS-_400x400.jpg",
    type: "mainnet",
    serviceUrl: "https://atomone.network/",
    explorerUrl: "https://www.mintscan.io/atomone",
  },
  {
    name: "Self Chain",
    id: "self-testnet",
    logo: "https://pbs.twimg.com/profile_images/1879603544120008704/z2WKYx3z_400x400.jpg",
    type: "mainnet",
  },
  {
    name: "Initia",
    id: "initia-mainnet",
    logo: "https://pbs.twimg.com/profile_images/1919389207367491584/GFxs1SP5_400x400.png",
    type: "mainnet",
  },

  // === Testnet ===
  {
    name: "Empeiria",
    id: "empe-testnet",
    logo: "https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg",
    type: "testnet",
  },
  {
    name: "Symphony Labs",
    id: "sympn-testnet",
    logo: "https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg",
    type: "testnet",
  },
  {
    name: "Warden",
    id: "warden-testnet",
    logo: "https://pbs.twimg.com/profile_images/1904848026742484992/nO3RP237_400x400.jpg",
    type: "testnet",
  },
];

const Home = () => {
  const [selected, setSelected] = useState<"Mainnet" | "Testnet">("Mainnet");

  // ✅ Chakra UI hooks
  const cardBg = useColorModeValue("gray.900", "gray.900");
  const borderColor = useColorModeValue("gray.800", "gray.700");
  const toggleBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("gray.800", "whiteAlpha.200");
  const inactiveColor = useColorModeValue("gray.800", "gray.400");
  const hoverBg = useColorModeValue("gray.300", "gray.600");
  const hoverColor = useColorModeValue("black", "white");

  // ✅ Filter data
  const filteredNetworks = networks.filter((net) =>
    selected === "Mainnet" ? net.type === "mainnet" : net.type === "testnet"
  );

  return (
    <DefaultLayout>
      {/* 🚫 Efek bintang dihapus */}

      <Hero />
      {/* <Teams mt="10" /> */}
      {/*Features mt= 15 */}
      <Features mt="20" />

      {/* Section Portfolio */}
      <Box
        position="relative"
        bg="black"
        color="white"
        w="100vw"
        minW="100vw"
        maxW="100vw"
        left="calc(50% - 50vw)"
        right="calc(50% - 50vw)"
        overflowX="hidden"
        clipPath={{
          base: "ellipse(160% 90% at 50% 100%)",
          md: "ellipse(90% 80% at 50% 100%)",
        }}
        py={{ base: 16, md: 24 }}
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100%",
          zIndex: 0,
          background: `
      repeating-linear-gradient(
        90deg,
        rgba(0,0,0,0.2) 0px,
        rgba(0,0,0,0.2) 1px,
        transparent 1px,
        transparent 40px
      ),
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.2) 0px,
        rgba(0,0,0,0.2) 1px,
        transparent 1px,
        transparent 40px
      ),
      linear-gradient(to bottom, #000000 30%, var(--chakra-colors-gray-800) 100%)
    `,
          backgroundRepeat: "repeat, repeat, no-repeat",
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          backgroundPosition: "0 0, 0 0, 0 0",
          backgroundBlendMode: "normal",
        }}
      >
        <Box position="relative" zIndex={1}>
          {/* ✅ Tambahkan container agar konten tetap center di mobile */}
          <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, md: 8 }}>
            <Section
              mt="20"
              title="Portofolio Project"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed consequatur."
            />

            {/* Toggle Buttons */}
            <Stack textAlign="center" spacing="4" mt="-10" mb="6">
              <Center>
                <HStack bg={toggleBg} p="1" borderRadius="full" spacing="1">
                  {["Mainnet", "Testnet"].map((item) => {
                    const isActive = selected === item;
                    return (
                      <Button
                        key={item}
                        size="sm"
                        borderRadius="full"
                        px="5"
                        fontWeight="medium"
                        bg={isActive ? activeBg : "transparent"}
                        color={isActive ? "white" : inactiveColor}
                        _hover={{ bg: hoverBg, color: hoverColor }}
                        onClick={() =>
                          setSelected(item as "Mainnet" | "Testnet")
                        }
                      >
                        {item}
                        <Text ml="1" fontSize="sm" opacity="0.6">
                          {item === "Mainnet"
                            ? networks.filter((n) => n.type === "mainnet")
                                .length
                            : networks.filter((n) => n.type === "testnet")
                                .length}
                        </Text>
                      </Button>
                    );
                  })}
                </HStack>
              </Center>
            </Stack>

            {/* Grid Network Cards */}
            <Box
              maxW="7xl"
              mx="auto"
              px={{ base: 4, sm: 6, md: 8 }} // base = HP → lebih sempit
            >
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="6"
                pb="16"
              >
                {filteredNetworks.map((net) => (
                  <Box
                    key={net.id}
                    bg={cardBg}
                    borderRadius="2xl"
                    p="5"
                    position="relative"
                    overflow="hidden"
                    border="1px solid"
                    borderColor={borderColor}
                    _hover={{
                      borderColor: "purple.400",
                      transform: "translateY(-4px)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {/* ✅ Konten di atas logo */}
                    <Box position="relative" zIndex={1}>
                      <HStack spacing="2">
                        <Text fontWeight="bold" fontSize="lg" color="white">
                          {net.name}
                        </Text>
                      </HStack>

                      <Text fontSize="sm" color="gray.500" mb="4">
                        {net.id}
                      </Text>

                      <HStack spacing="3">
                        <Button
                          as="a"
                          href={net.serviceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          bg="purple.600"
                          color="white"
                          borderRadius="md"
                          _hover={{ bg: "purple.500" }}
                        >
                          Services
                        </Button>
                        <Button
                          as="a"
                          href={net.explorerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          bg="black"
                          color="white"
                          borderRadius="md"
                          _hover={{ bg: "gray.800" }}
                          rightIcon={<ExternalLinkIcon />}
                        >
                          Explorer
                        </Button>
                      </HStack>
                    </Box>

                    {/* ✅ Logo di belakang konten */}
                    <ChakraImage
                      src={net.logo}
                      alt={net.name}
                      position="absolute"
                      top="2"
                      bottom="-20"
                      right="-15"
                      boxSize="120px"
                      borderRadius="full"
                      zIndex={0}
                      pointerEvents="none"
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Tweets />
      <TestnetArchive />
    </DefaultLayout>
  );
};

export default Home;
