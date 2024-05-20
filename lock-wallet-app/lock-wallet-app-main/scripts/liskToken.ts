import { ethers } from "hardhat";

async function toks() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const LiskToken = await ethers.getContractFactory("LiskToken");
  const liskToken = await LiskToken.deploy(1000); 
  console.log("Target set to:", liskToken.target);

      // Target set to: 0xf37090E69986dcBd81aB330728cA3857c8Ed65b6


}

toks()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });