export interface AirdropProject {
  id: string;
  name: string;
  category: 'Token' | 'NFT' | 'Defi';
  criteria: string;
  link: string;
}

export const PROJECTS: AirdropProject[] = [
  { id: 'aero', name: 'Aerodrome', category: 'Defi', criteria: 'LP Provider', link: 'https://aerodrome.finance' },
  { id: 'base-paint', name: 'Base Paint', category: 'NFT', criteria: 'Artist/Collector', link: 'https://basepaint.xyz' },
];

export async function checkEligibility(address: string) {
  // In a production app, you would use Covalent or Moralis API here 
  // to fetch transaction history and token balances on Base.
  
  let score = 0;
  const eligibleProjects = [];

  // Mock Logic: If address has more than 5 transactions, give score
  // This is where the "On-Chain Synchronization Engine" lives
  score = Math.floor(Math.random() * 100); 

  return {
    score,
    eligibleProjects,
    lastChecked: new Date().toISOString()
  };
}
