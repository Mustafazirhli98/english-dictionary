import React, { useContext } from 'react'
import { mainContext } from '../context'
import CardObject from '../Objects/cards';
export const Search = () => {

  const [isPlaying, setIsplaying, cardObject, setCardObject, typedWord, setTypedWord, isSearched, setIsSearched] = useContext(mainContext);

  const displayWord = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + typedWord)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          let word = data[0].word;
          let audio = data[0].phonetics[0].audio;
          let generalUse = data[0].meanings[0].partOfSpeech;
          let definition = data[0].meanings[0].definitions[0].definition;
          const newCardObject = new CardObject(word, audio, generalUse, definition);
          setCardObject(newCardObject);
          setIsSearched(true);
        } else alert("the word is not exist!")
        document.querySelector(".form-control").value = ""
      })
  }

  return (

    <div className='search'>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Type a word" onChange={(e) => {
          setTypedWord(e.target.value)
        }} />
        <button
          className="btn btnSearch"
          id="searchButton"
          type="button"
          onClick={() => {
            displayWord();
          }}>
          Search
        </button>
      </div>
    </div>

  )
}
