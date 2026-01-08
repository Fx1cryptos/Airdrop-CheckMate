export async function checkKaitoEligibility(profile) {
  if (!profile.farcaster && !profile.twitter) return false;

  // Kaito eligibility is OFFCHAIN & reputation-based
  // You can only detect signals, not confirm claims

  return true; // "Likely eligible"
}
