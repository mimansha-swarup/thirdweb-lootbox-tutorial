import { BundleModule } from "@3rdweb/sdk";
import { readFileSync } from "fs";
import { sdk } from "./helpers.js";



const main = async() =>{

    const bundleModuleAddress = '0xC0fd5432ab1693Ded4f3D7ff2Dcfd6fE342744c2';

    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log("creating Nft Batch...")

    const created = await bundleModule.createAndMintBatch([
        {
            metadata:{
                name:"Astronaut in Moon",
                description:"Angel astronaut in front of moon",
                image: readFileSync('./assets/astronaut.jpg'),
                properties: {
                    rarity: "a bit rare",
                    fanciness: 7,
                },
            },
            supply:50
        },
        {
            metadata:{
                name:"In Woods",
                description:"little boy in woods ",
                image: readFileSync('./assets/woods.jpg'),
                properties: {
                    rarity: "a bit rare",
                    fanciness: 7,
                },
            },
            supply:50
        },
        {
            metadata:{
                name:"On cliff",
                description:"Person on Cliff ",
                image: readFileSync('./assets/neon.jpg'),
                properties: {
                    rarity: "a bit rare",
                    fanciness: 7,
                },
            },
            supply:50
        },
        {
            metadata:{
                name:"Owl",
                description:"owl in front of multi-dimensional portal  ",
                image: readFileSync('./assets/neon.jpg'),
                properties: {
                    rarity: "super rare",
                    fanciness: 10,
                },
            },
            supply:10
        },
        {
            metadata:{
                name:"dark-space",
                description:"darkness overpowered",
                image: readFileSync('./assets/dark-space.jpg'),
                properties: {
                    rarity: "super rare",
                    fanciness: 10,
                },
            },
            supply:10
        },
        {
            metadata:{
                name:"Couple",
                description:"couple in Love",
                image: readFileSync('./assets/couple.jpg'),
                properties: {
                    rarity: "super rare",
                    fanciness: 10,
                },
            },
            supply:10
        },
    ])

    console.log("NFTs Creadted!!!")
    console.log(JSON.stringify(created,null,2))
    
    
}

try{
    await main();
}catch(error){
    console.error("Eror minting theNfts",error);
    process.exit(1);
}