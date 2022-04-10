import Bike from "./Bike"

export default function ListBikes({garage, show, deleteG, modal, filterchange, filter}) {
    


    const handleFilter= e =>{
        filterchange(e.target.value);
        console.log(e.target.value);
    }

    return(
        <section className={modal===0?"list":"noshow"}>
            <div className="top-holder">
                <h2>Paspirtukų sąrašas</h2>
                <select onChange={handleFilter} value={filter}>
                    <option value="0">Visi</option>
                    <option value="1">Laisvi</option>
                    <option value="2">Užimti</option>
                    <option value="3">Mažiausiai naudoti viršuje</option>
                    <option value="4">Daugiausiai naudoti viršuje</option>
                    <option value="5">Naujausiai naudotas viršuje</option>
                    <option value="6">Seniausiai naudotas viršuje</option>

                </select>

            </div>
            
            <ul>
               {
                    garage.map(b=>{  
                        return <Bike show={show} deleteG={deleteG} bike={b} key={b.id}></Bike>
                    })
                }    
            </ul>
        </section>    
    )   
}