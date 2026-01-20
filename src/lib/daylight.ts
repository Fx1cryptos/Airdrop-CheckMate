export interface DaylightAbility {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: 'CLAIM' | 'MINT' | 'VOTE' | 'BRIDGE';
  chain: string;
  value: {
    amount: string;
    currency: string;
    usd: number;
  } | null;
  claimUrl: string;
  expiresAt: string | null;
  requirements: {
    met: boolean;
    description: string;
  }[];
  project: {
    name: string;
    logo: string;
    verified: boolean;
  };
}

const DAYLIGHT_API_BASE = 'https://api.daylight.xyz/v1';

export async function fetchLiveAirdrops(walletAddress: string): Promise<DaylightAbility[]> {
  const apiKey = import.meta.env.VITE_DAYLIGHT_API_KEY;
  
  if (!apiKey || apiKey === 'your_daylight_api_key_here') {
    console.warn('Daylight API key missing. Returning mock data.');
    return getMockAirdrops(walletAddress);
  }

  try {
    const response = await fetch(
      `${DAYLIGHT_API_BASE}/accounts/${walletAddress}/abilities`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Daylight API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter for CLAIM type abilities (airdrops) that are met
    return (data.abilities || []).filter((ability: DaylightAbility) => 
      ability.type === 'CLAIM' && 
      (ability.requirements || []).every(req => req.met)
    );
    
  } catch (error) {
    console.error('Failed to fetch Daylight data:', error);
    return [];
  }
}

function getMockAirdrops(address: string): DaylightAbility[] {
  return [
    {
      id: 'mock-1',
      name: 'FX1 Reward Drop',
      description: 'Exclusive reward for FX1 early adopters and ecosystem participants.',
      imageUrl: 'https://cdn.blink.new/assets/fx1-logo.png',
      type: 'CLAIM',
      chain: 'base',
      value: {
        amount: '1000',
        currency: 'FX1',
        usd: 150.00
      },
      claimUrl: 'https://fx1.digital/claim',
      expiresAt: new Date(Date.now() + 86400000 * 30).toISOString(),
      requirements: [{ met: true, description: 'Early adopter' }],
      project: {
        name: 'FX1 Digital Hubs',
        logo: 'https://cdn.blink.new/assets/fx1-logo.png',
        verified: true
      }
    },
    {
      id: 'mock-2',
      name: 'Base Genesis NFT',
      description: 'Genesis NFT for early Base builders and users.',
      imageUrl: 'https://cdn.blink.new/assets/base-logo.png',
      type: 'CLAIM',
      chain: 'base',
      value: null,
      claimUrl: 'https://base.org/claim',
      expiresAt: null,
      requirements: [{ met: true, description: 'Used Base bridge' }],
      project: {
        name: 'Base',
        logo: 'https://cdn.blink.new/assets/base-logo.png',
        verified: true
      }
    }
  ];
}
