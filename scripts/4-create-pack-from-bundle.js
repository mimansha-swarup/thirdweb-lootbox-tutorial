import { sdk } from "./helpers.js";
import { readFileSync } from "fs";



const main = async() =>{

    const bundleModuleAddress = '0xC0fd5432ab1693Ded4f3D7ff2Dcfd6fE342744c2';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0x49D6995989FDBB4A14591FA2Ee187b757DD5C576';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Getting all NFTs from bundle...")
    
    const nftsBundle = await bundleModule.getAll()
    
    console.log(" NFTs bundle...")
    console.log(nftsBundle)
    
    console.log("Creating pack containing Nfts from bundle")
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata:{
            name:"Neon Imagination Pack",
            image:readFileSync('./assets/woods.jpg')
        },
        assets: nftsBundle.map(
            nft =>({
                tokenId: nft.metadata.id,
                amount:nft.supply,
            })
        )
    })
    console.log("Pack Created....")
    console.log(created)
    
}

try{
    await main();
}catch(error){
    console.error("Eror minting theNfts",error);
    process.exit(1);
}