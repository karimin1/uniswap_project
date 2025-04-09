const { ethers } = require("hardhat");
    async function main(){
    const [owner,signer]=await ethers.getSigner();
    Shoaib=await ethers.getContractFactory('Shoaib');
    shoaib=await Shoaib.deploy();
    const Rayan=await ethers.getContractFactory('Rayan');
    rayan=await Rayan.deploy();

    PopUp=await ethers.getContractFactory('PopUp');
    popUp=await PopUp.deploy();
    await shoaib.connect(owner).mint(signer2.address,ethers.utils.parseEther("100000"));
    await rayan.connect(owner).mint(signer2.address,ethers.utils.parseEther('100000'));
    await popUp.connect(owner).mint(signer2.address,ethers.utils.parseEther('100000'));
}
main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})