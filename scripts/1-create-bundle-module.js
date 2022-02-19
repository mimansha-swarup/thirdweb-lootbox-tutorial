// import {getApp} from './helpers'
import {getApp} from './helpers.js'

const main = async() =>{
    const app  = await getApp();

    console.log('Deploying bundle collection module....')
    
    const bundleModule = await app.deployBundleModule({
        name:"Lootboc Bundle",
        sellerFeeBasisPoints: 100,
    });
    
    console.log(`Deployed bundle collection module with address ${bundleModule.address}`)
    
}

try{
    await main();
}catch(error){
    console.error("Eror Creating Bundle module",error);
    process.exit(1);
}