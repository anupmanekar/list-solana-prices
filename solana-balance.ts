import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2]
const connection = new Connection(clusterApiUrl("mainnet-beta"));
console.log(`✅ Connected!`)
const address = new PublicKey(suppliedPublicKey);
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)