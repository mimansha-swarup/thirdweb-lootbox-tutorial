import { sdk } from "./helpers.js";



const main = async() =>{

    const packModuleAddress = '0x62ebF92414573D7d881C1594539daEEb096aE710';
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