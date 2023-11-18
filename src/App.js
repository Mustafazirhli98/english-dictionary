import './App.css';
import { useState } from 'react';
import { Cards } from './components/Cards';
import { Search } from './components/Search';
import { mainContext } from './context';


function App() {
  const [isPlaying, setIsplaying] = useState(false);
  const [cardObject, setCardObject] = useState("");
  const [typedWord, setTypedWord] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toastNote, setToastNote] = useState("");

  let stateData = [
    isPlaying, setIsplaying, cardObject, setCardObject, typedWord, setTypedWord, isSearched, setIsSearched, isError, setIsError, toastNote, setToastNote
  ]

  return (

    <mainContext.Provider value={stateData}>
      <div className="container">
        <h1 className='appTitle'>English Dictionary</h1>
        <Search />
        <Cards />
      </div>
    </mainContext.Provider>
  );
}

export default App;

