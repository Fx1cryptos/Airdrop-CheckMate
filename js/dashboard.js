import { UserProfile } from "./profile.js";
import { checkEligibility } from "./eligibility.js";
let userAddress = null;
// 1️⃣ Wallet Connect (Base-compatible)
async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install Coinbase Wallet or Base-compatible wallet");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  });

  userAddress = accounts[0];
  document.getElementById("wallet").innerText = userAddress;

  scanAirdrops();
}

// 2️⃣ Scan Airdrops
async function scanAirdrops() {
  const res = await fetch("http://localhost:3000/scan-wallet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: userAddress })
  });

  const json = await res.json();
  renderAirdrops(json.data.airdrops);
}

// 3️⃣ Render UI
function renderAirdrops(list) {
  const container = document.getElementById("airdrops");
  container.innerHTML = "";

  list.forEach((a, index) => {
    const row = document.createElement("div");
    row.className = "airdrop";
    row.innerHTML = `
      <div>
        <strong>${a.protocol}</strong><br/>
        <small>${a.type}</small>
      </div>
      <div>
        <span class="tag">CLAIMABLE</span><br/>
        <button class="btn" onclick="claimAirdrop(${index})">Claim</button>
      </div>
    `;
    container.appendChild(row);
  });
}

// 4️⃣ Claim Button (placeholder → real tx later)
function claimAirdrop(index) {
  alert("Claim flow will open Base transaction (next step)");
}

// 5️⃣ Farcaster Connect (ready hook)
function connectFarcaster() {
  alert("Farcaster connection coming next (FID + Neynar)");
}
