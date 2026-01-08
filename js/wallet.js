import { UserProfile } from "./profile.js";

export async function connectWallet() {
  if (!window.ethereum) {
    alert("Install Coinbase Wallet");
    return;
  }

  const accounts = await ethereum.request({
    method: "eth_requestAccounts"
  });

  UserProfile.setWallet(accounts[0]);
  return accounts[0];
}
