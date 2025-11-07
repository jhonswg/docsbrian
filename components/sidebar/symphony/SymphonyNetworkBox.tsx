import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  Image,
  useColorModeValue,
  useDisclosure,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link as ChakraLink,
  IconButton,
  keyframes,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// 🔥 Tambahkan interface untuk network config
interface NetworkConfig {
  name: string;
  logo: string;
  chainId: string;
  blockHeight: string;
  explorerUrl: string;
}

// 🔥 Data config untuk setiap network
const NETWORK_CONFIGS: Record<string, NetworkConfig> = {
  symphony: {
    name: "Symphony",
    logo: "https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg",
    chainId: "symp-testnet",
    blockHeight: "7,306,716",
    explorerUrl: "https://explorer.symphony.io",
  },
  empeiria: {
    name: "Empeiria",
    logo: "https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg",
    chainId: "empe-testnet-2",
    blockHeight: "5,123,456",
    explorerUrl: "https://explorer.empeiria.io",
  },
  warden: {
    name: "Warden",
    logo: "https://pbs.twimg.com/profile_images/1904848026742484992/nO3RP237_400x400.jpg",
    chainId: "warden-testnet",
    blockHeight: "3,456,789",
    explorerUrl: "https://explorer.warden.io",
  },
};

export default function SymphonyNetworkBox() {
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const sidebarBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.05)",
    "rgba(255,255,255,0.08)"
  );
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rotating, setRotating] = useState(false);
  const router = useRouter();

  // 🔥 Deteksi network aktif dari URL
  const getCurrentNetwork = (): string => {
    const path = router.asPath;
    
    if (path.includes("/empeiria")) return "empeiria";
    if (path.includes("/symphony")) return "symphony";
    if (path.includes("/warden")) return "warden";
    
    return "symphony";
  };

  const currentNetworkKey = getCurrentNetwork();
  const currentNetwork = NETWORK_CONFIGS[currentNetworkKey];

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
      setRotating(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, onClose]);

  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

  const handleRotate = () => {
    setRotating(true);
    setTimeout(() => setRotating(false), 1000);
    onOpen();
  };

  // Data jaringan
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
      link: "/services/mainnet/initia" ,
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

  // 🔥 Handler untuk pindah network
  const handleNetworkChange = async (link: string) => {
    onClose();
    setRotating(false);
    
    // Cek apakah sudah di network yang sama
    if (router.asPath === link) {
      return;
    }
    
    try {
      await router.push(link);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const renderGrid = (
    items: { name: string; logo: string; link?: string }[]
  ) => (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
      {items.map((item) => (
        <Box key={item.name}>
          {item.link ? (
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
              cursor="pointer"
              onClick={() => handleNetworkChange(item.link!)}
            >
              <Image
                src={item.logo}
                alt={item.name}
                boxSize="35px"
                borderRadius="full"
                mr={2}
              />
              <Text fontWeight="medium" fontSize="sm" color={textColor}>
                {item.name}
              </Text>
            </Flex>
          ) : (
            <Flex
              border="1px solid"
              borderColor={border}
              borderRadius="full"
              align="center"
              justify="center"
              py={2}
              px={3}
              bg={cardBg}
            >
              <Image
                src={item.logo}
                alt={item.name}
                boxSize="35px"
                borderRadius="full"
                mr={2}
              />
              <Text fontWeight="medium" fontSize="sm" color={textColor}>
                {item.name}
              </Text>
            </Flex>
          )}
        </Box>
      ))}
    </SimpleGrid>
  );

  return (
    <>
      {/* BOX utama - dinamis berdasarkan network aktif */}
      <Flex
        bg={sidebarBg}
        border="1px solid"
        borderColor={border}
        borderRadius="lg"
        p={4}
        mb={8}
        gap={6}
        flexWrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* KIRI: box logo + teks + ikon */}
        <HStack spacing={3}>
          <Box
            px={3}
            py={1}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Image
              src={currentNetwork.logo}
              alt={currentNetwork.name}
              boxSize="30px"
              borderRadius="full"
            />
            <Text fontSize="md" fontWeight="medium">
              {currentNetwork.name}
            </Text>
            <IconButton
              aria-label="Change Network"
              icon={<RepeatIcon boxSize={4} />}
              size="xs"
              variant="ghost"
              onClick={handleRotate}
              animation={rotating ? `${spin} 1s linear infinite` : "none"}
            />
          </Box>

          {/* Chain ID */}
          <Text fontSize="sm" opacity={0.7}>
            Chain ID:
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            {currentNetwork.chainId}
          </Text>
        </HStack>

        {/* Block Height */}
        <HStack spacing={2}>
          <Text fontSize="sm" opacity={0.7}>
            Block Height:
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            {currentNetwork.blockHeight}
          </Text>
        </HStack>

        {/* RPC Status */}
        <HStack spacing={2}>
          <Text fontSize="sm" opacity={0.7}>
            RPC Status:
          </Text>
          <Box w={2} h={2} bg="green.400" borderRadius="full" />
        </HStack>

        {/* Explorer */}
        <Button
          as={ChakraLink}
          href={currentNetwork.explorerUrl}
          isExternal
          size="sm"
          colorScheme="pink"
          variant="outline"
        >
          Explorer
        </Button>
      </Flex>

      {/* MODAL daftar jaringan */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        isCentered
        blockScrollOnMount={false}
        trapFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          bg={sidebarBg}
          border="1px solid"
          borderColor={border}
          borderRadius="2xl"
          p={4}
        >
          <ModalHeader textAlign="center" fontSize="lg">
            🌐 Select Network
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb={8}>
              <Text mb={3} fontWeight="medium">
                Mainnet
              </Text>
              {renderGrid(mainnet)}
            </Box>
            <Box>
              <Text mb={3} fontWeight="medium">
                Testnet
              </Text>
              {renderGrid(testnet)}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}