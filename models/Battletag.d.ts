interface Battletag { 
    id: number
    isPublic: boolean
    level: number
    name: string
    platform: "pc" | "xbox" | "playstation" | "nintendo-switch"
    playerLevel: number
    portrait: string
    urlName: string
}

export default Battletag;
