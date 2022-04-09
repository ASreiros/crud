import { useState, useEffect } from "react";
import string from '../Common/string';


export default function CreateBike({create, modal}) {

    const [newcode, setNewCode] = useState("AAAAAAAA")
    const[newdate, setNewDate] = useState("")
    const[newkm, setNewKm] = useState(0)
    const[error, setError] = useState("")

    useEffect(()=>{
        setNewCode(string(8,8))
        }, []);

    const changeDate = e=>{
        setNewDate(e.target.value)
    }

    const changeKm =(e)=>{
        if(e.target.value>=0){
            setNewKm(e.target.value)
        }
    }


    const handleCreate = () =>{
        if(newdate !==""){
            create({
                code:newcode,
                date:newdate,
                km:newkm,
            })
            setError("")
            setNewDate("")
            setNewKm(0)
            setNewCode(string(8,8))
        } else{
            setError("Reikia įvesti data")
        }

    }

    return(
        <section className={modal===0 ?'create':"noshow"}>
            <h2>Naujas paspirtukas</h2>
            <h3>Paspirtuko numeris {newcode}</h3>
            <div className="horizontal-holder">    
                <label>Paspirtuko paskutinio naudojimo data </label>
                <input onChange={changeDate} type="date" value={newdate} />
                <label>Paspirtukas pravažiavo</label>
                <input onChange={changeKm} type="number" value={newkm} />
            </div>
            <p>{error}</p>
            <button onClick={handleCreate}>Create</button>
        </section>
    )

}