const main = async () => {

    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    console.log("Deploying contract with account", deployer.address);
    console.log("Account Balance : ", accountBalance.toString())

    const WaveContractFactory = await hre.ethers.getContractFactory("Wave");
    const WaveContract = await WaveContractFactory.deploy();
    await WaveContract.deployed();
    
    console.log("Contract is deployed to : ",WaveContract.address);

    // // await WaveContract.getTotalWaves();

    // const firstWaveTxn = await WaveContract.wave();
    // await firstWaveTxn.wait();
    // // await WaveContract.getTotalWaves();

    // const secondWaveTxn = await WaveContract.connect(owner).wave();
    // await secondWaveTxn.wait();
    // // await WaveContract.getTotalWaves();

    // const thirdWaveTxn = await WaveContract.connect(owner).wave();
    // await thirdWaveTxn.wait();
    // // await WaveContract.getTotalWaves();

    // const fourthWaveTxn = await WaveContract.connect(randomPerson).wave();
    // await fourthWaveTxn.wait();
    // await WaveContract.getFrequentWaivers();
    // // await WaveContract.getTotalWaves();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();
