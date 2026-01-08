import { createPublicClient, http, parseAbi } from 'viem';
import { base } from 'viem/chains';

const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

// Minimal ABIs for common check patterns
const genericAbi = parseAbi([
  'function balanceOf(address owner) view returns (uint256)',
  'function hasClaimed(address user) view returns (bool)',
  'function rewards(address user) view returns (uint256)'
]);

export async function scanBaseEcosystem(userAddress: `0x${string}`) {
  const contracts = [
    { name: 'Aerodrome Rewards', address: '0x...', function: 'rewards' },
    { name: 'Base Paint Airdrop', address: '0x...', function: 'hasClaimed' },
    { name: 'Meme Token X', address: '0x...', function: 'balanceOf' },
  ];

  const calls = contracts.map(c => ({
    address: c.address as `0x${string}`,
    abi: genericAbi,
    functionName: c.function,
    args: [userAddress],
  }));

  const results = await publicClient.multicall({ contracts: calls });
  
  return results.map((res, index) => ({
    project: contracts[index].name,
    eligible: res.status === 'success' && !!res.result,
    rawData: res.result
  }));
}
