const { expect } = require("chai"); // assertion library, provides functions like expect

describe("MyFirstContract", () => {
  it("should return its name", async () => {
    const MyContract = await ethers.getContractFactory("MyFirstContract");
    const myContract = await MyContract.deploy("My First Contract");

    await myContract.deployed();
    expect(await myContract.getName()).to.equal("My First Contract");
  });
  it("should change its name when requested", async () => { // test a specific method or functionality

    // injects ethers into the tests globally, then creates a factory so it can be instantiated it
    const MyContract = await ethers.getContractFactory("MyFirstContract");
    const myContract = await MyContract.deploy("My First Contract");

    // calls the constructor of the contract
    await myContract.changeName("Another Contract");
    expect(await myContract.getName()).to.equal("Another Contract");
  });
});
