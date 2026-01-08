import express from "express";
import cors from "cors";
import "dotenv/config";
import scanRoute from "./src/routes/scan.js";

const app = express();

app.use(cors({
  origin: [
    "https://airdropcheckmate.lovable.app"
  ]
}));

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ status: "Airdrop CheckMate API live on Base" });
});

app.use("/scan-wallet", scanRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Airdrop CheckMate running on port ${PORT}`)
);
