import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import eligibilityRoute from "./routes/eligibility.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://airdropcheckmate.lovable.app"
}));
app.use(express.json());

app.use("/api/eligibility", eligibilityRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);
