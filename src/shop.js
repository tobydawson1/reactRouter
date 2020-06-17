import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems()
  },[]);

  const fetchItems = async () => {
    const data = await fetch(`https://www.reddit.com/r/reactjs.json`
    );

    const items = await data.json();
    console.log(items)
  };

  return (
    <div className="App">
      <h1> Shop page </h1>
    </div>
  );
}

export default Shop;
 