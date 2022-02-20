import { ethers } from "ethers";
import { sdk } from "./helpers.js";



const main = async() =>{

    const packModuleAddress = '0x62ebF92414573D7d881C1594539daEEb096aE710';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Depositing link...")

    const amount = ethers.utils.parseEther('2')

    await packModule.depositLink(amount);
    console.log('Deposited!!!!')

    const balance = await packModule.getLinkBalance();
    console.log(balance);

}

try{
    await main();
}catch(error){
    console.error("Eror depositing link",error);
    process.exit(1);
}