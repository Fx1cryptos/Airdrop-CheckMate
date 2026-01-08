import { AIRDROPS } from "./airdrops.js";
import { UserProfile } from "./profile.js";

export function checkEligibility() {
  const eligible = [];

  AIRDROPS.forEach(drop => {
    if (drop.eligibility.requiresFarcaster && !UserProfile.farcaster) return;
    if (!UserProfile.wallet) return;

    eligible.push(drop);
  });

  return eligible;
}
