import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');

  const URL = `http://api.weatherapi.com/v1/forecast.json?key=9f88a08e2e31432bb00154158233001&q=cordoba&days=2&lang=es`

  const getData = async () => {
    await fetch(URL)
    .then(response => {return response.json()})
    .then( data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    }); 
  }

  const handleSearch = (e)=> {
    console.log(e.target.value)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='container'>
      <h1>SPITALAN Weather App</h1>
      <div className='row'>
        <input
        onKeyDown={handleSearch}
        type='text'
        autoFocus
        >
        </input>
      </div>
    </div>
  )
}

export default App

