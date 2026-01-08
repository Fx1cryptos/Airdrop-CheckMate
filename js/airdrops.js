export const AIRDROPS = [
  {
    id: "base-early",
    name: "Base Early User",
    chainId: 8453,
    type: "token",
    claimContract: "0xABC123...",
    eligibility: {
      minTx: 1
    }
  },
  {
    id: "farcaster-user",
    name: "Farcaster User Drop",
    type: "nft",
    eligibility: {
      requiresFarcaster: true
    }
  }
];
