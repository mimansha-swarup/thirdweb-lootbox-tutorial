import type { NFTMetadata} from "@3rdweb/sdk"

type Props  = {
    metadata: NFTMetadata
}

export default function NFT({metadata} : Props){
    return(
        <div className="flex flex-col">
            <p className="font-medium text-lg">{metadata.name}</p>
            <img src={metadata.image} alt={metadata.name} className="w-48 h-36 object-cover"  />
        </div>
    )
}