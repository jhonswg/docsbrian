import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
  const menuListBg = useColorModeValue("white", "gray.800");

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
      submenu: [
        {
          label: "📡 RPC, API & gRPC",
          path: "/services/mainnet/initia/public-endpoint",
          hash: "#rpc-api-grpc",
        },
        {
          label: "🌐 Peers & Seeds",
          path: "/services/mainnet/initia/public-endpoint",
          hash: "#peers-seeds",
        },
      ],
    },
    {
      icon: "📌",
      label: "Installation",
      submenu: [
        {
          label: "🔧 Install Node",
          path: "/services/mainnet/initia/installation",
        },
        {
          label: "💰 Token Management",
          path: "/services/mainnet/initia/token-management",
        },
        {
          label: "👨‍💼 Validator Management",
          path: "/services/mainnet/initia/validator-management",
        },
      ],
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
    {
      icon: "🌐",
      label: "Decentralization Analytics",
      path: "/services/mainnet/initia/decanaly",
    },
    {
      icon: "🙏",
      label: "Consensus",
      path: "/services/mainnet/initia/consensus",
    },
    {
      icon: "🛰️",
      label: "Public RPC Scanner",
      path: "/services/mainnet/initia/rpcscanner",
    },
    {
      icon: "🤖",
      label: "Proposal Bot",
      path: "/services/mainnet/initia/proposalbot",
    },
  ];

  const handleSubmenuClick = (path: string, hash?: string) => {
    if (hash) {
      router.push(path).then(() => {
        setTimeout(() => {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      });
    } else {
      router.push(path);
    }
  };

  return (
    <Box
      display={{ base: "block", lg: "none" }}
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
      <Flex gap={4} minW="max-content">
        {menuItems.map((item, index) => {
          // Item dengan submenu - menggunakan Menu dropdown
          if (item.submenu) {
            return (
              <Menu key={index}>
                <MenuButton
                  as={Box}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  minW="auto"
                  h="40px"
                  px={4}
                  borderRadius="xl"
                  bg={
                    item.path && isActive(item.path)
                      ? activeBg
                      : "transparent"
                  }
                  _hover={{ bg: hoverBg }}
                  transition="all 0.2s"
                  cursor="pointer"
                  textDecoration="none"
                  position="relative"
                >
                  <Text fontSize="3xl">{item.icon}</Text>
                  <ChevronDownIcon 
                    boxSize={4} 
                    position="absolute" 
                    bottom="2px" 
                    right="2px"
                    opacity={0.7}
                  />
                </MenuButton>
                <MenuList
                  bg={menuListBg}
                  border="1px solid"
                  borderColor={border}
                  boxShadow="lg"
                  minW="250px"
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      onClick={() =>
                        handleSubmenuClick(subItem.path, (subItem as any).hash)
                      }
                      _hover={{ bg: hoverBg }}
                      fontSize="sm"
                      bg={
                        isActive(subItem.path) ? activeBg : "transparent"
                      }
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            );
          }

          // Item tanpa submenu - menggunakan Link biasa
          return (
            <Link key={index} href={item.path!} passHref>
              <Box
                as="a"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={3}
                minW="auto"
                h="40px"
                px={4}
                borderRadius="xl"
                bg={isActive(item.path!) ? activeBg : "transparent"}
                _hover={{ bg: isActive(item.path!) ? activeBg : hoverBg }}
                transition="all 0.2s"
                cursor="pointer"
                textDecoration="none"
              >
                <Text fontSize="3xl">{item.icon}</Text>
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};