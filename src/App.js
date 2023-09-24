import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


const autocomplecturl='https://api.weatherapi.com/v1/current.json?key=7f3c66a76138454dac922057232104&q=jaffna&aqi=no'

function App() {

const [city, setcity] = useState('');
const [citysuggest, setcitysuggest] = useState([1,2,3,4,5,6]);

// cllickpana change akum use effect
useEffect(()=>{
  const fetchsuggest= async ()=>{
    const resp= await fetch(autocomplecturl + city);
    const data=await resp.json();

    // const citysuggestdata=data.map((cu) =>`${cu.name}`)
    console.warn(data);
    // setcitysuggest(citysuggestdata);

    // console.log(citysuggestdata)
  };



if(city.length >2){

  fetchsuggest();


}else {
  setcitysuggest([])
}




},[city])


  return (
    <div className="App">
      <h1>sanjeee</h1>
 <input type="text"  className="city tex" onChange={(event)=>setcity(event.target.value)} />
 {city}

{citysuggest.map(curcity=>
  (<div className='dd'>
  {curcity}
</div>))}


    </div>

  );
}

export default App;
