import { ethers } from "ethers";
import { sdk } from "./helpers.js";



const main = async() =>{

    const packModuleAddress = '0x49D6995989FDBB4A14591FA2Ee187b757DD5C576';
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