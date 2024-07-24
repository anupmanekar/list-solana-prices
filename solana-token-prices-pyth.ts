/**
 * Program to list token prices on Pyth Network
 */
import { PriceServiceConnection } from "@pythnetwork/price-service-client";
import { getPythProgramKeyForCluster } from "@pythnetwork/client";
const priceFeedIds = {
    "btc_to_usd": "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    "jup_to_usd": "0x0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996"
}
async function main() {
    // The URL below is a public Hermes instance operated by the Pyth Data Association.
// Hermes is also available from several third-party providers listed here:
// https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes
const priceServiceConnection = new PriceServiceConnection(
    "https://hermes.pyth.network/",
    { priceFeedRequestConfig: { binary: true } }
  );
   
  // Hermes provides other methods for retrieving price updates. See
  // https://hermes.pyth.network/docs for more information.
  const priceUpdateData: string[] = await priceServiceConnection.getLatestVaas([
    priceFeedIds.btc_to_usd, 
  ]);
   
  // Price updates are strings of base64-encoded binary data. Example:
  // ["UE5BVQEAAAADuAEAAAADDQJoIZzihVp30/71MXDexqiJDjGpEUEcHj/D06pRiYTPPlRPZKKiVFaZdqiGZ7vvGBj1kK69fKRncCKHXlGyS0LcAQPREzVlm7AcY+X0/hCupv8M5KMhEgOCxq5LxCCKQjL/xwm4jTCJrwkHn/PBaoirnlbHMjxAlwJaFF4RGeE1KRDeAASQIFjfbbobiq2OcSRnK3Ny1NY2Zd012ahIhoWpqxbv4UqDZXLh+bPm4Q14SfO/llRTOmqG6O4v+nfjZa7WNjgxAAZFANqAEooKvijK+476YBITKono+vJ4bSQHUiXOaiGs/zcI6WYGRM0xc6ov2mfCaTuH7mx3ElaLyPGvRX4D9DyHAAf+dPg+NEepwMJI1qPLRcTy0xoz2Yq0k2MuL87gCBsYVlS31atGsQcrXfHr4xcTKKyEUh1tIaOfRbPdX1cvs4D6AAj2/vuKpAgYWhd2gtqHsQLV1vMgq8SKH8wiOmhaMZ06GAQSM1pYLpHZRhYaUQbrUJAeqEeX+qMMqQFMPSSUnEKNAAmCE98NUYbHuEoxJGMDybTGCyDEXCmaNM0q6GT0qrbSmT6NF50yz9CE30WWHNOZzFtK2rCyBYFH2aAp6lQ1JKfmAQpW/wUaOhSdwGiEPWvpY3FWL077i0c4auXQjSQNaDD0cBnmvJTS5R3KxK5aunuUvVAT1mHTnpKHIzNKyu7ICM2zAQvrIFfWRFjVE0zRCvoAcvMpmpS7atWu8VgvklpZh9Qt9xYSO2Yq/asgNsMSQaowXiU0MfjggS+UJ8yWaOpUg18vAAxAMuUlOjNzFj6oPES850YNu2k7PM7AGL8Gb/8+HshkfjG0GsNR8H8/vB8v/iEcaScxQFXwtLT0OSgjWMa0ByknAA7PScKUEP8N7iJKYv6lmEs26DZnxzdpGVZRGqbbC0mxyjY0HqsT0rv2wNvy3MbAtABDMsLumII00cRCKBsZXGlKARCC0NzsKnduLsgGfqxYL4yuf910DKrRp5j+fKLmF2QiB2yVT90ja0782/u6BZZUGRMoA/AWl1qvswBtnlSkHcWEABIp74UFLiiA+MBBvBzhLBxSTKXldiLJ75+U/eqK/ej6qT+I+6S1pzT/ntXdpD25jmQhjtsYEqs/rmgs5U2p4AVRAGYULPcAAAAAABrhAfrtrFhR4yubI7X5QRqMK6xKrj7U3XuBHdGnLqSqcQAAAAAC8IR2AUFVV1YAAAAAAAf6dUkAACcQMZv+5jfvAe6sflX1cL7xu9WWQ9UBAFUA5i32yLSoX+GmfbRNwS3l2zMPesZrctxliv7fD0pBW0MAAAaBiqrXwAAAAADYu55y////+AAAAABmFCz3AAAAAGYULPYAAAaFH6MbAAAAAADcBIdMCre0t06ngCnw+N4IkFpZVqOz9YuwKL+UFdt13ZBtay0YZnkw7QGoaTDCLlsNK1tk1F/qgMyOcYozjOTj41XriIpEPeG2HPYl+u0CKolGlCsz1IDu4w2lyh6LWVaMkEybGz7ih4H2RqCj6BVu182ZqsZgJx9ghzKImAo4cIlWzRTwpm4daAqHa4JEyimFDpFt6UeqvS5TNu2F8W+X+edeiph20EulTI7sx38jwhq5Yc0Mf2ElvFgToGQ806Vs2HynuLwh9OIuTTZh"]
  console.log(priceUpdateData);
  const priceFeeds = await priceServiceConnection.getLatestPriceFeeds([
    priceFeedIds.btc_to_usd,
    priceFeedIds.jup_to_usd 
  ]);
  console.log(priceFeeds);

  const pythProgramKey = getPythProgramKeyForCluster('mainnet-beta');
  console.log(pythProgramKey);

}

main();