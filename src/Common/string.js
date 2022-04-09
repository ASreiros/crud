import Rand from "./Rand";


export default function String(s,f){
    let randomstring = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = Rand(s,f)
    for (let i = 0; i < length; i++) {
        randomstring += characters[Rand(0,characters.length-1)]        
    }
   
    return(randomstring)
} 


