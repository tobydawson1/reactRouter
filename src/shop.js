import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './App.css';

function Shop() {

  const APP_ID = "2768748c";
  const APP_KEY = "2bfe199293484f7d2747e51188f424be";
  const query = 'chicken';


  useEffect(() => {
    fetchItems()
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

   
    const items = await data.json(); 
    console.log(items.hits)
    setItems(items.hits);
  };

  return (
    <div className="App">
      {items.map(item => (
        <h1 key={item.recipe.label}>
          <Link to={`/shop/${item.recipe.label}`}>{item.recipe.label}</Link>
          </h1>
      ))}
    </div>
  );
}

export default Shop;
 