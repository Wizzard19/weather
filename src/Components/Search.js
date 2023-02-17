import React from 'react';
import '../Styles/components.css';

const Search = () => {
  return (
    <div className='search'>
      <div className='headerText'>
        <h2>Córdoba</h2>
      </div>
      <div className='max-min'>
        <p>Minima</p>
        <p>Maxima</p>
        <img
          className='icon'
          alt='weather-icon'
          title='esto es un icono'
          src=''
        />
      </div>

      <div className='footerText'>
        <input
          type='text'
          placeholder='ingrese ciudad'
          className='searchBox'
        ></input>
      </div>
    </div>
  );
};

export default Search;
