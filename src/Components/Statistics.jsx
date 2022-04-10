import { useEffect, useState } from "react"

export default function Statistics({modal, garage}){

    const [info, setInfo] = useState([])
    const [totalkm, setTotalKm] = useState([])
    const [bikesum, setBikesum] = useState(0)
    const [freebikesum, setFreeBikesum] = useState(0)

    useEffect(()=>{
        let data = localStorage.getItem("garage")
          setInfo(JSON.parse(data))
      }, [garage]);

      useEffect(()=>{
            let counter = 0;
            let freecounter = 0;
            let km = 0;
            info.forEach(p=>{
                counter++;
                km+= Number(p.km);
                if(p.busy==="0"){
                    freecounter++
                }
            })
            setBikesum(counter);
            setFreeBikesum(freecounter);
            setTotalKm(Math.round(km*100)/100);

      }, [info]);

    return(
        <section className={modal===0?"statistics":"noshow"}>
            <h2>Statistika</h2>
            <p>Paspirtukų kiekis {bikesum}</p>
            <p>Laisvų paspirtukų kiekis {freebikesum}</p>
            <p>Bendras nuvažiotas paspirtukais atstumas {totalkm} km</p>

        </section>    
    )
}