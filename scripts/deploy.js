const { ethers } = require("hardhat");

contract("NFT deployment", () => {
	let multiSwap;

	before(async () => {
    const multiWalletSwap = await ethers.getContractFactory("MultiWalletTokenSwapper");
		multiSwap = await multiWalletSwap.deploy(
			"0x7a250d5630b4cf539739df2c5dacb4c659f2488d"
		);
		await multiSwap.deployed();

		console.log("Multi Swap deployed at address: ", multiSwap.address);
	});

	it("should print contract address", async () => {
		console.log("Multi Swap deployed at address: ", multiSwap.address);
	});

});