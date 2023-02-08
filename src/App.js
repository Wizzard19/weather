import React, {useEffect, useState} from 'react'
import './App.css';
import Icons from './Components/Icons';


function App() {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');

  const URL = `http://api.weatherapi.com/v1/forecast.json?key=9f88a08e2e31432bb00154158233001&q=${search}&lang=es`

  const getData = async () => {
    await fetch(URL)
    .then(response => {return response.json()})
    .then( data => {
      if(data){
        console.log(data);
      setIcon(data.current.condition.text)
      setValues(data)
        
        
      } else {
        setValues(false)
        document.write('Error en la busqueda ', '"' + data.error.message + '"')
        console.log(data.error.code, data.error.message)
      
      }
    })
    .catch(error => {
      console.log(error)
    }); 
  }

  

  const handleSearch = (e)=> {
    if (e.key === 'Enter'){
      setSearch(e.target.value)
      console.log(e.target.value)
    }
  }
  useEffect(()=>{
    getData()
  },[search]) //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
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

    <div className='card'>
      {(values) ? (
        <div className='card-container'>
          <h2 className='citi-name'>{values.location.name}</h2>
          <p className='temp'>{values.current.temp_c.toFixed(0)}&deg;</p>
          <img className='icon' src={Icons(icon)} alt='icon-weather' title={values.current.condition.text} />
          <div className='card-footer'>
           <p className='temp-max-min'>{values.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}&deg;</p>
           <p className='temp-max-min'>{values.forecast.forecastday[0].day.mintemp_c.toFixed(0)}&deg;</p>
           <p className='humidity'>{values.current.feelslike_c.toFixed(0)} %</p>
            
          </div>
          
        </div>
      ) : (
        <h2>Ciudad no encontrada</h2>
        
      )}
    </div>
    </>
  )
}

export default App;
