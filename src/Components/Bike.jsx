export default function Bike({bike, show, deleteG}) {

    return(
        <li>
            <h3 className={bike.busy==="1" ? "busybike":""} id={bike.id}>Paspirtukas {bike.code}</h3>
            <div>
                <p>Praeito važiavimo data {bike.date}</p>
                <p>Viso pravažiavo {bike.km} km</p>
                <p>{bike.busy==="1" ? "Dabar yra užimtas":"Dabar yra laisvas"}</p>
            </div>
            <div>
                <button onClick={()=>show(bike.id)}>Edit</button>
                <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteG(bike.id) } }>Delete</button>
            </div>    
        </li> 
    )
}