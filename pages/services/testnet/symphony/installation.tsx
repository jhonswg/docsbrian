import Head from "next/head";
import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import SymphonyLayout from "@/components/sidebar/symphony/SymphonyLayout";

export default function SymphonyInstallationPage() {
  return (
    <>
      <Head>
        <title>Symphony - Installation</title>
        <meta
          name="description"
          content="Symphony Testnet Installation Guide"
        />
      </Head>

      <SymphonyLayout>
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
git clone https://github.com/symphony-labs/symphony.git
cd symphony
git checkout v0.2.2
make install`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Config and init app
            </Heading>
            <CodeBlock
              code={`symphonyd config node tcp://localhost:26657
symphonyd config keyring-backend os
symphonyd config chain-id symphony-testnet-1
symphonyd init "your-moniker" --chain-id symphony-testnet-1`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Download genesis and addrbook
            </Heading>
            <CodeBlock
              code={`wget -O genesis.json https://testnet-files.symphony.io/genesis.json --inet4-only
mv genesis.json ~/.symphony/config`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Set seeds and peers
            </Heading>
            <CodeBlock
              code={`SEEDS="seed1@symphony-testnet-seed.itrocket.net:28656"
PEERS="peer1@symphony-testnet-peer.itrocket.net:28656"
sed -i -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/; s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.symphony/config/config.toml`}
            />
          </Box>

          <Box>
            <Heading fontSize="lg" mb={3} color="orange.400">
              Create service file
            </Heading>
            <CodeBlock
              code={`sudo tee /etc/systemd/system/symphonyd.service > /dev/null <<EOF
[Unit]
Description=Symphony node
After=network-online.target
[Service]
User=$USER
WorkingDirectory=$HOME/.symphony
ExecStart=$(which symphonyd) start --home $HOME/.symphony
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
sudo systemctl enable symphonyd
sudo systemctl restart symphonyd && sudo journalctl -u symphonyd -f`}
            />
          </Box>
        </VStack>

        <Box as={Link} href="/services" textDecoration="none">
          <Button colorScheme="orange" variant="ghost" size="sm" mt={8}>
            ← Back to Network
          </Button>
        </Box>
      </SymphonyLayout>
    </>
  );
}
