import {ThirdwebSDK} from "@3rdweb/sdk";
import { ethers } from "ethers";

import dotenv from "dotenv"
dotenv.config();

const walletePrivateKey = process.env.WALLET_PRIVATE_KEY;

if(!walletePrivateKey){
    console.error("wallete Private key missing")
    process.exit(1)
}

export const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.WALLET_PRIVATE_KEY,
        ethers.getDefaultProvider("https://winter-icy-sun.matic-testnet.quiknode.pro/f36aa318f8f806e4e15a58ab4a1b6cb9f9e9d9b9/")
    )
);

const appAddress = "0xa438abbF4651F9790caD97Cb6b509eEc450eFEab";

export async function getApp(){
    const app = await sdk.getAppModule(appAddress);
    return app;
}