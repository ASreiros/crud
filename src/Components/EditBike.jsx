import { useState, useEffect } from "react";



export default function EditBike({bike, edit, cancel}) {

    const [ecode, setECode] = useState("")
    const[edate, setEDate] = useState("")
    const [pdate, setPDate] = useState("")
    const [totalkm, setTotalKm]=useState(0)
    const[ekm, setEKm] = useState(0)
    const [ebusy, setEbusy] = useState("0")

    useEffect(()=>{
        setECode(bike.code)
        setTotalKm(bike.km)
        setPDate(bike.date)
        setEDate(new Date().toISOString().slice(0, 10))
        setEbusy(bike.busy==="1"?true:false)
        }, []);

    const ChangeBusy =b=>{
        setEbusy(b.target.checked)
     
    }

    const ChangeEkm =b=>{
        if(b.target.value>=0){
            setEKm(b.target.value)
        }    
    }

    const editHandler = ()=>{
        const data ={
            date:edate,
            busy:ebusy===true? "1":"0",
            km:(Math.round((Number(totalkm)+Number(ekm))*100)/100),
        }
        
        edit(data)
    }

    return(
        <div className="modal">
            <section className='edit'>
                <h2>Paspirtuko informacijos koregavimas</h2>
                <h2>(numeris {ecode})</h2>
                <div> 
                    <div>   
                        <label>Paspirtuko paskutinio naudojimo data </label>
                        <p>{pdate}</p>
                    </div>
                    <div>   
                        <label>Paspirtukas pravažiavo iki šios dienos</label>
                        <p>{totalkm}</p>
                    </div>
                </div>
                <div className="horizontal-holder">        
                    <label>Paspirtukas pravažiavo šiandien ({edate})</label>
                    <input onChange={ChangeEkm} type="number" value={ekm} />
                </div>
                <div className="horizontal-holder">    
                    <label>Paspirtukas užimtas?</label>
                    <input onChange={ChangeBusy} type="checkbox" checked={ebusy}></input>
                </div>
                <div className="horizontal-holder">
                    <button onClick={editHandler}>Edit</button>
                    <button onClick={cancel}>Cancel</button>
                </div>    
            </section>
        </div>    
    )

}