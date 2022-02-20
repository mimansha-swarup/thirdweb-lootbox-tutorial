import { sdk } from "./helpers.js";
import { readFileSync } from "fs";



const main = async() =>{

    const bundleModuleAddress = '0xBC579F9cCd7D010B76E0E3f99500d9Ea2E9E4B88';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0x62ebF92414573D7d881C1594539daEEb096aE710';
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