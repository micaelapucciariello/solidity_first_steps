async function main() {
    const MyContract = await ethers.getContractFactory("MyFirstContract");
    const myContract = await MyContract.deploy("My First Contract");
  
    console.log("My First Contract deployed to:", myContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });
  