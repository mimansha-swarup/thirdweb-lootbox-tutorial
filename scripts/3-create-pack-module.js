import { getApp } from "./helpers.js";



const main = async() =>{

    const app = await getApp();

    console.log("Deploying Module...")

    const packModule = await app.deployPackModule({
        name:"Lootbox Pack",
        sellerFeeBasisPoints:0,
    })

   

    console.log(`Deployed pack module with address ${packModule.address}`)
    
}

try{
    await main();
}catch(error){
    console.error("Eror minting theNfts",error);
    process.exit(1);
}