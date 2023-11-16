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


  let stateData = [
    isPlaying, setIsplaying, cardObject, setCardObject, typedWord, setTypedWord, isSearched, setIsSearched
  ]

  return (

    <mainContext.Provider value={stateData}>
      <div className="container">
        <h1 className='appTitle'>Dictionary App</h1>
        <Search />
        <Cards />
      </div>
    </mainContext.Provider>
  );
}

export default App;

//input boşsa pop-up çıkacak
//kelime yoksa pop-up çıkacak
//ses yoksa pop-up çıkacak
//inputun uzunluğu sabit tutulacak
//sayfa başına başlık eklenecek