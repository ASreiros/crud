export default function getNewId() {

    let id=localStorage.getItem("dbikes_id")

    if(null===id){
        localStorage.setItem("dbikes_id",1)
        return 1
    }

    id=parseInt(id)
    id++
    localStorage.setItem("dbikes_id", id)
    return id
}