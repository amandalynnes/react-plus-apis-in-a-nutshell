import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() { 
    const [shoes, setShoes] = useState([])
    const url = 'http://127.0.0.1:8000/api/shoe/'
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])
    return <h1>Hello Amanda, well done. You got this!</h1>;
}

export default App;
