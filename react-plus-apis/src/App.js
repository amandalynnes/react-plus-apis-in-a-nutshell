import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() { 
    const [shoes, setShoes] = useState([])
    const url = 'http://127.0.0.1:8000/api/shoe/'
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setShoes(data));
    }, [])
    return(
    <div>
    <h1>Shoes, Shoes, Shoes, Shoes!</h1>
      <ul>
        {shoes.map ((s) => (
            <p>{s.size}
            <p>{s.brand_name}</p>
            <p>{s.manufacturer}</p>
            <p>{s.color}</p>
            <p>{s.material}</p>
            <p>{s.shoe_type}</p>
            <p>{s.fasten_type}</p>
          </p>
        ))}
    </ul>
    </div>
    );
}

export default App;
