import './style.scss'
import "./stars.scss"
import Background from './Components/Background';
import { useEffect, useState } from 'react';
import ListBikes from './Components/ListBikes';
import getNewID from './Common/getNewID';
import CreateBike from './Components/CreateBike';
import EditBike from './Components/EditBike';
import Statistics from './Components/Statistics';


function App() {
  const [garage, setGarage] = useState([])
  const [garagelist, setGarageList] = useState([])
  const [filter, setFilter] = useState(4)
  const [modal, setModal] = useState(0)


  useEffect(()=>{
    let data = localStorage.getItem("garage")
    if(data===null){
      localStorage.setItem("garage", JSON.stringify([]))
      setGarage([])
    }else{
      setGarage(JSON.parse(data))
    }
  }, []);

  useEffect(()=>{
    const data =[...garage];
    let data2 = [];
    console.log(filter);
    switch (Number(filter)) {
      case 0:
        data2=[...data];
        break;
       case 1:
        data.forEach(p=>{
          if(p.busy==="0"){
            data2.push(p)
          }
        })
        break;
        case 2:
          data.forEach(p=>{
            if(p.busy==="1"){
              data2.push(p)
            }
          })
          break;
          case 3:
            data2=data.sort(function(a, b) {
              return Number(a.km) - Number(b.km);
            })
            break;
          case 4:
            data2=data.sort(function(a, b) {
                return Number(b.km) - Number(a.km);
              })
            break;
            case 5:
              data2=data.sort((a,b) => Date.parse(b.date) - Date.parse(a.date))
              break; 
            case 6:
              data2=data.sort((a,b) => Date.parse(a.date) - Date.parse(b.date))
              break;   
              

      default:
        data2=[...data]
        break;    
    }
    setGarageList([...data2])

  }, [garage, filter]);


  const filterchange = val=>{
      setFilter(val)
  }


  const create = (data)=>{
    const bike={
      km: (Math.round(data.km*100)/100),
      date:data.date,
      busy:"0",
      id:getNewID(),
      code:data.code,
    }
    const newData = [bike, ...garage]
    localStorage.setItem("garage", JSON.stringify(newData))

    setGarage(garage=>[bike, ...garage])
    console.log(newData);

  }

  const edit = (data)=>{
      const garageCopy = [...garage];
      garageCopy.forEach((z,i)=>{
        if(z.id=== modal){
          garageCopy[i].date= data.date;
          garageCopy[i].busy= data.busy;
          garageCopy[i].km= data.km;
        }
      })

      localStorage.setItem("garage", JSON.stringify(garageCopy))
      setGarage(garageCopy)
      cancel();
  }

  

  const deleteG =(id)=>{
    const newData=garage.filter(a=> a.id !== id)
    localStorage.setItem("garage", JSON.stringify(newData))
    setGarage(garage=>garage.filter(a=> a.id !== id))
  }

  const GetBike = ()=>{
    let data = JSON.parse(localStorage.getItem("garage"))
    let data2 = {}
    for (let i = 0; i < data.length; i++) {
      if (data[i].id=== modal) {
        data2 = data[i]
      }
      
    }

    return data2

  }

  const show = (id) =>{
    setModal(id)
  }

  const  cancel = () =>{
    setModal(0)
  }

  return (
    <>
      <div className="App">
        <Background></Background>
        <h1>Kolt paspirtukų nuoma</h1>
        <CreateBike modal={modal} create={create}></CreateBike>
        <ListBikes filter={filter} filterchange={filterchange} modal={modal} show={show} deleteG={deleteG} garage={garagelist}></ListBikes>
        <Statistics garage={garage} modal={modal}></Statistics>
        {
        modal ?  <EditBike edit={edit}  cancel={cancel} bike={GetBike()}></EditBike> : null
        }
      </div>



    </>  
  );
}

export default App;
