import Head from "next/head";
import {
  Box,
  Heading,
  Flex,
  Image,
  Button,
  VStack,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Divider,
  Text,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { navbarRoutes } from "@/config/navbar-routes";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { CodeBlock } from "@/components/CodeBlock";
import { Footer } from "@/components/footer";
import EmpeiriaNetworkBox from "@/components/sidebar/empeiria/EmpeiriaNetworkBox";

export default function EmpeiriaInstallationPage() {
  const router = useRouter();
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.05)",
    "rgba(255,255,255,0.08)"
  );
  const sidebarBg = useColorModeValue("white", "gray.800");

  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      <Head>
        <title>Empeiria - Installation</title>
        <meta
          name="description"
          content="Empeiria Testnet Installation Guide"
        />
      </Head>

      <Navbar routes={navbarRoutes} />

      {/* Main Content Container */}
      <Box
        position="relative"
        minH="100vh"
        pt="100px"
        pb="16"
        overflow="visible" // ✅ Ubah dari hidden ke visible
      >
        {/* Background blur */}
        <Box
          boxSize="72"
          position="absolute"
          top="0"
          left="0"
          bg="purple.500"
          borderRadius="full"
          filter="blur(400px)"
          zIndex={0}
        />
        <Box
          boxSize="72"
          position="absolute"
          bottom="0"
          right="0"
          bg="pink.500"
          borderRadius="full"
          filter="blur(400px)"
          zIndex={0}
        />

        <Flex
          position="relative"
          zIndex={1}
          gap={6}
          px={{ base: 4, md: 8 }}
          align="start"
          maxW="1600px"
          mx="auto"
        >
          {/* Sidebar */}
          <Box display={{ base: "none", lg: "block" }} w="320px" flexShrink={0}>
            <Box
              bg={sidebarBg}
              borderRadius="2xl"
              p={6}
              border="1px solid"
              borderColor={border}
              position="sticky"
              top="100px"
            >
              {/* Logo & Title */}
              <Flex align="center" mb={6} gap={3}>
                <Image
                  src="https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg"
                  alt="Empeiria"
                  boxSize="50px"
                  borderRadius="full"
                />
                <Box>
                  <Heading fontSize="xl">Empeiria</Heading>
                  <Text fontSize="sm" color="green.400">
                    testnet
                  </Text>
                </Box>
              </Flex>

              {/* Accordion Menu */}
              <Accordion allowMultiple defaultIndex={[1]}>
                <AccordionItem border="none" mb={2}>
                  <AccordionButton
                    borderRadius="lg"
                    _hover={{ bg: cardBg }}
                    px={3}
                    py={3}
                    bg={
                      isActive("/services/testnet/empeiria")
                        ? cardBg
                        : "transparent"
                    }
                    onClick={() => router.push("/services/testnet/empeiria")}
                  >
                    <Flex align="center" flex="1" textAlign="left" gap={3}>
                      <Text fontSize="xl">⚙️</Text>
                      <Text fontSize="sm" fontWeight="medium">
                        API & Sync
                      </Text>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>

                <AccordionItem border="none" mb={2}>
                  <AccordionButton
                    borderRadius="lg"
                    _hover={{ bg: cardBg }}
                    px={3}
                    py={3}
                    bg={
                      isActive("/services/testnet/empeiria/installation")
                        ? cardBg
                        : "transparent"
                    }
                    onClick={() =>
                      router.push("/services/testnet/empeiria/installation")
                    }
                  >
                    <Flex align="center" flex="1" textAlign="left" gap={3}>
                      <Text fontSize="xl">📌</Text>
                      <Text fontSize="sm" fontWeight="medium">
                        Installation
                      </Text>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>

                <AccordionItem border="none" mb={2}>
                  <AccordionButton
                    borderRadius="lg"
                    _hover={{ bg: cardBg }}
                    px={3}
                    py={3}
                    bg={
                      isActive("/services/testnet/empeiria/upgrade")
                        ? cardBg
                        : "transparent"
                    }
                    onClick={() =>
                      router.push("/services/testnet/empeiria/upgrade")
                    }
                  >
                    <Flex align="center" flex="1" textAlign="left" gap={3}>
                      <Text fontSize="xl">🔄</Text>
                      <Text fontSize="sm" fontWeight="medium">
                        Upgrade
                      </Text>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>

                <AccordionItem border="none" mb={2}>
                  <AccordionButton
                    borderRadius="lg"
                    _hover={{ bg: cardBg }}
                    px={3}
                    py={3}
                    bg={
                      isActive("/services/testnet/empeiria/cheat-sheet")
                        ? cardBg
                        : "transparent"
                    }
                    onClick={() =>
                      router.push("/services/testnet/empeiria/cheat-sheet")
                    }
                  >
                    <Flex align="center" flex="1" textAlign="left" gap={3}>
                      <Text fontSize="xl">📝</Text>
                      <Text fontSize="sm" fontWeight="medium">
                        Cheat Sheet
                      </Text>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </AccordionItem>
              </Accordion>

              <Divider my={4} />

              <VStack align="stretch" spacing={2}>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  leftIcon={<Text fontSize="xl">🌐</Text>}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Decentralization Analytics
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  leftIcon={<Text fontSize="xl">🙏</Text>}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Consensus
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  leftIcon={<Text fontSize="xl">🛰️</Text>}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Public RPC Scanner
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  leftIcon={<Text fontSize="xl">🤖</Text>}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Proposal Bot
                </Button>
              </VStack>
            </Box>
          </Box>

          {/* Main Content */}
          <Box flex="1" minW="0">
            <EmpeiriaNetworkBox />

            {/* 🧩 Installation Box */}
            <Box
              bg={sidebarBg}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor={border}
              mt={0}
              mb={8} // ✅ Tambah margin bottom untuk spacing dengan footer
            >
              <Heading fontSize="2xl" mb={6} mt={0}>
                Installation
              </Heading>

              <VStack align="stretch" spacing={6}>
                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # install go, if needed
                  </Heading>
                  <CodeBlock
                    code={`cd $HOME
VER="1.22.3"
wget "https://golang.org/dl/go$VER.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$VER.linux-amd64.tar.gz"
rm "go$VER.linux-amd64.tar.gz"
[ ! -f ~/.bash_profile ] && touch ~/.bash_profile
echo "export PATH=$PATH:/usr/local/go/bin:~/go/bin" >> ~/.bash_profile
source $HOME/.bash_profile
[ ! -d ~/go/bin ] && mkdir -p ~/go/bin`}
                  />
                </Box>

                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # download and build binaries
                  </Heading>
                  <CodeBlock
                    code={`cd $HOME
git clone https://github.com/empe-io/empe-chain-releases.git
cd empe-chain-releases
git checkout v0.2.2
make install`}
                  />
                </Box>

                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # config and init app
                  </Heading>
                  <CodeBlock
                    code={`emped config node tcp://localhost:26657
emped config keyring-backend os
emped config chain-id empe-testnet-2
emped init "your-moniker" --chain-id empe-testnet-2`}
                  />
                </Box>

                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # download genesis and addrbook
                  </Heading>
                  <CodeBlock
                    code={`wget -O genesis.json https://testnet-files.itrocket.net/empeiria/genesis.json --inet4-only
mv genesis.json ~/.empe/config`}
                  />
                </Box>

                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # set seeds and peers
                  </Heading>
                  <CodeBlock
                    code={`SEEDS="20ca5fc4882e6f975add2d106da8afc4a5a6c6d@empeiria-testnet-seed.itrocket.net:28656"
PEERS="03aa072f917ed1b79a14ea2cc660bc3bac787e82@empeiria-testnet-peer.itrocket.net:28656"
sed -i -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/; s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.empe/config/config.toml`}
                  />
                </Box>

                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # create service file
                  </Heading>
                  <CodeBlock
                    code={`sudo tee /etc/systemd/system/emped.service > /dev/null <<EOF
[Unit]
Description=Empeiria node
After=network-online.target
[Service]
User=$USER
WorkingDirectory=$HOME/.empe
ExecStart=$(which emped) start --home $HOME/.empe
Restart=on-failure
RestartSec=5
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF`}
                  />
                </Box>

                <Box>
                  <Heading fontSize="lg" mb={3}>
                    # enable and start service
                  </Heading>
                  <CodeBlock
                    code={`sudo systemctl daemon-reload
sudo systemctl enable emped
sudo systemctl restart emped && sudo journalctl -u emped -f`}
                  />
                </Box>
              </VStack>

              <NextLink href="/services" passHref>
                <Button
                  as="a"
                  colorScheme="orange"
                  variant="ghost"
                  size="sm"
                  mt={8}
                >
                  ← Back to Network
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* ✅ Footer dipindah keluar dari Box utama dan ada z-index */}
      <Box position="relative" zIndex={10}>
        <Footer />
      </Box>
    </>
  );
}