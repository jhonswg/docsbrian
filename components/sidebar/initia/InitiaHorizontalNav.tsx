import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Tooltip,
  } from "@chakra-ui/react";
  import { useRouter } from "next/router";
  import Link from "next/link";
  
  export const InitiaHorizontalNav = () => {
    const router = useRouter();
    const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
    const sidebarBg = useColorModeValue("white", "gray.800");
    const cardBg = useColorModeValue(
      "rgba(255,255,255,0.05)",
      "rgba(255,255,255,0.08)"
    );
    const activeBg = useColorModeValue("pink.100", "pink.900");
    const hoverBg = useColorModeValue("whiteAlpha.100", "whiteAlpha.200");
  
    const isActive = (path: string) => router.pathname === path;
  
    const menuItems = [
      {
        icon: "🏠",
        label: "Introduction",
        path: "/services/mainnet/initia/",
      },
      {
        icon: "⚙️",
        label: "Public Endpoint",
        path: "/services/mainnet/initia/public-endpoint",
      },
      {
        icon: "📌",
        label: "Installation",
        path: "/services/mainnet/initia/installation",
      },
      {
        icon: "💰",
        label: "Token Management",
        path: "/services/mainnet/initia/token-management",
      },
      {
        icon: "👨‍💼",
        label: "Validator Management",
        path: "/services/mainnet/initia/validator-management",
      },
      {
        icon: "🔄",
        label: "Upgrade",
        path: "/services/mainnet/initia/upgrade",
      },
      {
        icon: "📝",
        label: "Cheat Sheet",
        path: "/services/mainnet/initia/cheat-sheet",
      },
    ];
  
    return (
      <Box
        display={{ base: "block", lg: "none" }} // Hanya tampil di mobile/tablet
        bg={sidebarBg}
        border="1px solid"
        borderColor={border}
        borderRadius="lg"
        p={4}
        mb={6}
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <Flex gap={3} minW="max-content">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} passHref>
              <Box
                as="a"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={3}
                minW="auto"
                h="40px"
                px={5}
                borderRadius="xl"
                bg={isActive(item.path) ? activeBg : "transparent"}
                _hover={{ bg: isActive(item.path) ? activeBg : hoverBg }}
                transition="all 0.2s"
                cursor="pointer"
                textDecoration="none"
              >
                <Text fontSize="3xl">{item.icon}</Text>
                {/* <Text fontSize="sm" fontWeight="semibold" whiteSpace="nowrap">
                  {item.label}
                </Text> */}
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    );
  };