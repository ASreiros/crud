import Rand from "./Rand";

export default function RandomColor(){
    return `rgb(${Rand(1,256)},${Rand(1,256)}, ${Rand(1,256)})`
}