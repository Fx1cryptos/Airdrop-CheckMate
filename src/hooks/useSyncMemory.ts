import { memoryService } from '@/lib/mem0';

export const useSyncMemory = () => {
  const syncAirdropState = async (address: string, scanResults: any) => {
    const memoryPayload = {
      address,
      lastScan: new Date().toISOString(),
      eligibleAirdrops: scanResults.filter((r: any) => r.eligible),
      totalPotentialValue: scanResults.reduce((acc: number, curr: any) => acc + (curr.value || 0), 0)
    };

    // Save to Mem0 using the API Key provided
    await memoryService.saveUserProfile(address, memoryPayload);
  };

  return { syncAirdropState };
};
