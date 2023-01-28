import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search';
import Card from './components/card';

function App() {
  const [incomingData, setIncomingData] = useState([])
  const [inputtedText, setInputText] = useState('')
  const [filteredInput, setFilteredInput] = useState(incomingData)

  // Receiving Data from the API and parsing it to incomingData array
  // This will only run once i.e on mounting the site!
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((income) => {
      return income.json()
    }).then(processedResult => {
      setIncomingData(processedResult)
    }).catch(err => console.log("There was an error parsing information:" + err))
  }, [])

  // setting a function that will only run when the inputted text changes
  useEffect(() => {
    let filteredArr = incomingData.filter(cur => {
      return cur.name.toLowerCase().includes(inputtedText)
    })
    setFilteredInput(filteredArr);
  }, [inputtedText])

  // I want to parse all the typed values into the InputtedText state.
  const HandletextInput = (e) => {
    setInputText(e.target.value.toLowerCase())
  }

  return (
    <div className='overall-div'>
      <h1 className="monster">MonStERS RolodEX</h1>
      <Search textCheck={HandletextInput} />
      <div className='card-grid'>
        {filteredInput.map((cur, index) => {
          return <Card key={index} current={cur} />
        })}
      </div>

    </div>
  );
}


export default App;
