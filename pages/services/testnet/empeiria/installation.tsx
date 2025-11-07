import Head from "next/head";
import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import EmpeiriaLayout from "@/components/sidebar/empeiria/EmpeiriaLayout";

export default function EmpeiriaInstallationPage() {
  return (
    <>
      <Head>
        <title>Empeiria - Installation</title>
        <meta
          name="description"
          content="Empeiria Testnet Installation Guide"
        />
      </Head>

      <EmpeiriaLayout>
        <Heading fontSize="3xl" mb={6} textAlign="center">
          🔧 Install Node
        </Heading>

        <VStack align="stretch" spacing={6}>
          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Install dependencies
            </Heading>
            <CodeBlock
              code={`sudo apt update && sudo apt upgrade -y && sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential bsdmainutils git make ncdu gcc git jq chrony liblz4-tool -y`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Install go, if needed
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
            <Heading fontSize="lg" mb={3} color="orange.400">
              Download and build binaries
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
            <Heading fontSize="lg" mb={3} color="orange.400">
              Config and init app
            </Heading>
            <CodeBlock
              code={`emped config node tcp://localhost:26657
emped config keyring-backend os
emped config chain-id empe-testnet-2
emped init "your-moniker" --chain-id empe-testnet-2`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Download genesis and addrbook
            </Heading>
            <CodeBlock
              code={`wget -O genesis.json https://testnet-files.itrocket.net/empeiria/genesis.json --inet4-only
mv genesis.json ~/.empe/config`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Set seeds and peers
            </Heading>
            <CodeBlock
              code={`SEEDS="20ca5fc4882e6f975add2d106da8afc4a5a6c6d@empeiria-testnet-seed.itrocket.net:28656"
PEERS="03aa072f917ed1b79a14ea2cc660bc3bac787e82@empeiria-testnet-peer.itrocket.net:28656"
sed -i -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/; s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.empe/config/config.toml`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Create service file
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
            <Heading fontSize="lg" mb={3} color="orange.400">
              Enable and start service
            </Heading>
            <CodeBlock
              code={`sudo systemctl daemon-reload
sudo systemctl enable emped
sudo systemctl restart emped && sudo journalctl -u emped -f`}
            />
          </Box>
        </VStack>

        <Box as={Link} href="/services" textDecoration="none">
          <Button colorScheme="orange" variant="ghost" size="sm" mt={8}>
            ← Back to Network
          </Button>
        </Box>
      </EmpeiriaLayout>
    </>
  );
}
