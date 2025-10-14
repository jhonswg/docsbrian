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
import { Teams } from "@/components/teams";
import { Features } from "@/components/features";
import { Tweets } from "@/components/tweets";

const networks = [
  // === Mainnet ===
  {
    name: "Atomone",
    id: "atomone-1",
    logo: "https://pbs.twimg.com/profile_images/1891894823390429185/9swkoZNn_400x400.png",
    type: "mainnet",
  },
  {
    name: "Autonity",
    id: "autonity",
    logo: "https://pbs.twimg.com/profile_images/1627678067459063811/pICOOrh-_400x400.jpg",
    type: "mainnet",
  },
  {
    name: "Babylon",
    id: "bbn-1",
    logo: "https://pbs.twimg.com/profile_images/1877371944636485632/kzLetgFB_400x400.jpg",
    type: "mainnet",
  },
  {
    name: "Bitway",
    id: "bitway-1",
    logo: "/logos/bitway.svg",
    type: "mainnet",
  },
  {
    name: "Cosmos",
    id: "cosmoshub-4",
    logo: "/logos/cosmos.svg",
    type: "mainnet",
  },
  {
    name: "Crossfi",
    id: "crossfi-mainnet-1",
    logo: "/logos/crossfi.svg",
    type: "mainnet",
  },
  {
    name: "Doravota",
    id: "vota-ash",
    logo: "/logos/doravota.svg",
    type: "mainnet",
  },
  {
    name: "Humans",
    id: "humans_1089-1",
    logo: "/logos/humans.svg",
    type: "mainnet",
  },

  // === Testnet ===
  {
    name: "Elys",
    id: "elys-testnet-1",
    logo: "/logos/elys.svg",
    type: "testnet",
  },
  {
    name: "Celestia",
    id: "celestia-testnet",
    logo: "/logos/celestia.svg",
    type: "testnet",
  },
  {
    name: "Empower",
    id: "empowerchain-testnet",
    logo: "/logos/empower.svg",
    type: "testnet",
  },
  {
    name: "Fuel",
    id: "fuel-testnet",
    logo: "/logos/fuel.svg",
    type: "testnet",
  },
];

const Home = () => {
  const [selected, setSelected] = useState<"Mainnet" | "Testnet">("Mainnet");
  const cardBg = useColorModeValue("gray.900", "gray.900");
  const borderColor = useColorModeValue("gray.800", "gray.700");

  // Filter network berdasarkan pilihan
  const filteredNetworks = networks.filter((net) =>
    selected === "Mainnet" ? net.type === "mainnet" : net.type === "testnet"
  );

  return (
    <DefaultLayout>
      <Hero />
      <Teams mt="10" />
      <Features mt="6" />
      <Section
        mt="8"
        title="Portofolio Project"
        subtitle="Make things happen"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed consequatur."
      />

      {/* Toggle Buttons */}
      <Stack textAlign="center" spacing="6" mt="-8" mb="6">
        <Center>
          <HStack
            bg={useColorModeValue("gray.100", "gray.700")}
            p="1"
            borderRadius="full"
            spacing="1"
          >
            {["Mainnet", "Testnet"].map((item) => (
              <Button
                key={item}
                size="sm"
                borderRadius="full"
                px="5"
                fontWeight="medium"
                bg={
                  selected === item
                    ? useColorModeValue("whiteAlpha.300", "whiteAlpha.200")
                    : "transparent"
                }
                color={selected === item ? "white" : "gray.400"}
                _hover={{ bg: "gray.600", color: "white" }}
                onClick={() => setSelected(item as "Mainnet" | "Testnet")}
              >
                {item}
                <Text ml="1" fontSize="sm" opacity="0.6">
                  {item === "Mainnet"
                    ? networks.filter((n) => n.type === "mainnet").length
                    : networks.filter((n) => n.type === "testnet").length}
                </Text>
              </Button>
            ))}
          </HStack>
        </Center>
      </Stack>

      {/* Grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing="6"
        px={{ base: "4", md: "8" }}
        pb="16"
      >
        {filteredNetworks.map((net) => (
          <Box
            key={net.id}
            bg={cardBg}
            borderRadius="2xl"
            p="5"
            border="1px solid"
            borderColor={borderColor}
            _hover={{
              borderColor: "purple.400",
              transform: "translateY(-4px)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <HStack justify="space-between" mb="4">
              <Text fontWeight="bold" fontSize="lg" color="white">
                {net.name}
              </Text>
              <ChakraImage
                src={net.logo}
                alt={net.name}
                boxSize="8"
                borderRadius="full"
              />
            </HStack>

            <Text fontSize="sm" color="gray.500" mb="4">
              {net.id}
            </Text>

            <HStack spacing="3">
              <Button
                size="sm"
                bg="purple.600"
                color="white"
                borderRadius="md"
                _hover={{ bg: "purple.500" }}
              >
                Services
              </Button>
              <Button
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
        ))}
      </SimpleGrid>

      <Tweets mt="12" />
    </DefaultLayout>
  );
};

export default Home;
