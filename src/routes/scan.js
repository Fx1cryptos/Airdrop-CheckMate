import express from "express";
import { scanWalletAirdrops } from "../services/airdropScanner.js";
import { success } from "../utils/response.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: "Wallet address required" });
  }

  const result = await scanWalletAirdrops(address);
  res.json(success(result));
});

export default router;
