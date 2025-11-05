import Head from "next/head";
import { Box, Heading, Button, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import WardenLayout from "@/components/sidebar/warden/WardenLayout";

export default function WardenValidatorManagementPage() {
  return (
    <>
      <Head>
        <title>Warden - Validator Management</title>
        <meta name="description" content="Warden - Validator Management" />
      </Head>

      <WardenLayout>
        <Heading fontSize="3xl" mb={6} textAlign="center">
          👨‍💼 Validator Management
        </Heading>

        <VStack align="stretch" spacing={8}>
          {/* Create Validator */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Create Validator
            </Heading>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Create validator
                </Text>
                <CodeBlock
                  code={`wardend tx staking create-validator \
--amount 1000000uward \\
--pubkey $(wardend tendermint show-validator) \\
--moniker "your-moniker-name" \\
--identity "your-keybase-id" \\
--details "your-details" \\
--website "your-website" \\
--security-contact "your-email" \\
--chain-id buenavista-1 \\
--commission-rate 0.05 \\
--commission-max-rate 0.20 \\
--commission-max-change-rate 0.01 \\
--min-self-delegation 1 \\
--from wallet \\
--gas-adjustment 1.4 \\
--gas auto \\
--gas-prices 0.025uward \\
-y`}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  💡 Tip: Make sure to save your priv_validator_key.json file!
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Edit Validator */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Edit Validator
            </Heading>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Edit validator information
                </Text>
                <CodeBlock
                  code={`wardend tx staking edit-validator \
--new-moniker "your-moniker-name" \
--identity "your-keybase-id" \
--details "your-details" \
--website "your-website" \
--security-contact "your-email" \
--chain-id buenavista-1 \
--commission-rate 0.05 \
--from wallet \
--gas-adjustment 1.4 \
--gas auto \
--gas-prices 0.025uward \
-y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Change commission rate
                </Text>
                <CodeBlock
                  code={`wardend tx staking edit-validator \\
--commission-rate="0.05" \\
--chain-id=buenavista-1 \\
--gas-adjustment=1.2 \\
--gas-prices="0.5uward" \\
--gas=auto \\
--from=wallet`}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  ⚠️ Note: Commission rate can only be changed once per day and
                  cannot exceed commission-max-change-rate
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Unjail Validator */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Unjail Validator
            </Heading>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check jailed reason
                </Text>
                <CodeBlock
                  code={`wardend query slashing signing-info $(wardend tendermint show-validator)`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Unjail validator
                </Text>
                <CodeBlock
                  code={`wardend tx slashing unjail --from wallet --chain-id wardend-testnet-2 --gas-prices 0.5uempe --gas-adjustment 1.2 --gas auto -y`}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  ⚠️ Note: You can only unjail after the jail period has passed
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Validator Info */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Validator Information
            </Heading>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check node ID
                </Text>
                <CodeBlock code={`wardend status 2>&1 | jq .NodeInfo`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check validator info
                </Text>
                <CodeBlock code={`wardend status 2>&1 | jq .ValidatorInfo`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Get validator address
                </Text>
                <CodeBlock code={`wardend keys show wallet --bech val -a`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Query validator details
                </Text>
                <CodeBlock
                  code={`wardend query staking validator $(emped keys show wallet --bech val -a)`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check if validator is jailed
                </Text>
                <CodeBlock
                  code={`wardend query staking validator $(emped keys show wallet --bech val -a) | grep jailed`}
                />
              </Box>
            </VStack>
          </Box>

          {/* Governance */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Governance
            </Heading>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  List all proposals
                </Text>
                <CodeBlock code={`wardend query gov proposals`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  View proposal by ID
                </Text>
                <CodeBlock code={`wardend query gov proposal 1`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote yes on proposal
                </Text>
                <CodeBlock
                  code={`wardend tx gov vote 1 yes --from wallet --chain-id buenavista-1 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote no on proposal
                </Text>
                <CodeBlock
                  code={`wardend tx gov vote 1 no --from wallet --chain-id buenavista-1 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote abstain on proposal
                </Text>
                <CodeBlock
                  code={`wardend tx gov vote 1 abstain --from wallet --chain-id buenavista-1 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote no with veto on proposal
                </Text>
                <CodeBlock
                  code={`wardend tx gov vote 1 no_with_veto --from wallet --chain-id buenavista-1 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>
            </VStack>
          </Box>
        </VStack>

        <Box as={Link} href="/services" textDecoration="none">
          <Button colorScheme="orange" variant="ghost" size="sm" mt={8}>
            ← Back to Network
          </Button>
        </Box>
      </WardenLayout>
    </>
  );
}
