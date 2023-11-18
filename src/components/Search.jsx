import React, { useContext, useState } from 'react'
import { mainContext } from '../context'
import CardObject from '../Objects/cards';
import { Toast } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";
export const Search = () => {

  const [isPlaying, setIsplaying, cardObject, setCardObject, typedWord, setTypedWord, isSearched, setIsSearched, isError, setIsError, toastNote, setToastNote] = useContext(mainContext);

  // #region notFoundError
  const showNotFoundError = () => {
    setToastNote("Word can't be found.")
    setIsError(true)
    setTimeout(() => {
      setIsError(false)
    }, 2000)
  }
  //#endregion

  const displayWord = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + typedWord)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const newCardObject = new CardObject(data[0].word, data[0].phonetics[0].audio, data[0].meanings[0].partOfSpeech, data[0].meanings[0].definitions[0].definition);
          setCardObject(newCardObject);
          setIsSearched(true);
        }
        else showNotFoundError()
        document.querySelector(".form-control").value = "";
        setTypedWord("");
      }).catch(() => showNotFoundError())
  }

  return (
    <div className='row mb-5'>
      <Toast className='toast' show={isError}>
        <Toast.Body className='toastBody'>{toastNote}<IoMdClose className='closeToast' onClick={() => setIsError(false)} /></Toast.Body>
      </Toast>

      <div className='col-sm-12 searchSection'>
        <form>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Type a word" onChange={(e) => {
              setTypedWord(e.target.value)
            }} />
            <button
              className="btn btnSearch"
              id="searchButton"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                displayWord();
              }}>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
