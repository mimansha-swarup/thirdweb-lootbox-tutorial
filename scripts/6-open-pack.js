import { sdk } from "./helpers.js";



const main = async() =>{

    const packModuleAddress = '0x49D6995989FDBB4A14591FA2Ee187b757DD5C576';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Opening Pack...")
    const opened = await packModule.open('0');
    console.log("Opened the Pack!!!")
    console.log(opened);

}

try{
    await main();
}catch(error){
    console.error("Eror Opening the Pack",error);
    process.exit(1);
}