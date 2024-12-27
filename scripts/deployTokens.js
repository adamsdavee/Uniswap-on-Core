// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {
    loadFixture
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function main() {
    
  const cherryTokenFactory = await hre.ethers.getContractFactory("CherryToken");
  const storage = await cherryTokenFactory.deploy();

  console.log("Storage contract deployed to:", storage.target);

  const appleTokenFactory = await hre.ethers.getContractFactory("AppleToken");
  const appleToken = await appleTokenFactory.deploy();

  console.log("Storage contract deployed to:", appleToken.target);

  const wrappedTokenFactory = await hre.ethers.getContractFactory("WrappedEduToken");
  const wrappedToken = await wrappedTokenFactory.deploy();

  console.log("Storage contract deployed to:", wrappedToken.target);

//   console.log("call retrieve():", await storage.retrieve())

//   console.log("call store(), set value to 100")
//   const tx = await storage.store(100)
//   await tx.wait()
  
//   console.log("call retrieve() again:", await storage.retrieve())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CORE: Storage contract deployed to: 0xc04229AC77a2A66c52Cc9cB09dCEfE9e89d47bFa
// Storage contract deployed to: 0x650ADf6aA8b4e5764273E7f2001B2A3f792859a5
// Storage contract deployed to: 0x472f5f362B237C1E9C0d77E5E4589C0f64Ee2170