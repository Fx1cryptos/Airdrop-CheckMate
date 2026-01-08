import { Transaction, TransactionButton, TransactionStatus, TransactionResponse } from '@coinbase/onchainkit/transaction';
import { BASE_AIRDROP_ABI } from '@/lib/abis';

export function ClaimModule({ userAddress, projectData }: any) {
  // The 'calls' array is what actually interacts with the Base chain
  const calls = [{
    address: projectData.contractAddress,
    abi: BASE_AIRDROP_ABI,
    functionName: 'claim',
    args: [
      userAddress,
      projectData.allocation, // Amount from your database
      projectData.merkleProof  // Proof generated from your backend
    ],
  }];

  const handleError = (err: TransactionResponse) => {
    console.error("Airdrop Claim Failed:", err);
  };

  const handleSuccess = (receipt: any) => {
    // 1. Update the Memory Protocol (Mem0) that this is claimed
    // 2. Trigger a confetti animation
    console.log("Successfully claimed!", receipt);
  };

  return (
    <div className="p-4 border border-[#0405aa]/20 rounded-2xl bg-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-[#0405aa]">{projectData.name}</h4>
        <span className="text-sm font-mono">{projectData.formattedAmount} Tokens</span>
      </div>

      <Transaction
        address={userAddress}
        calls={calls}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <TransactionButton 
          className="w-full bg-[#0405aa] hover:bg-blue-800 text-white rounded-lg transition-all" 
          text={`Claim ${projectData.symbol}`}
        />
        <TransactionStatus className="mt-2 text-xs text-center" />
      </Transaction>
    </div>
  );
}
