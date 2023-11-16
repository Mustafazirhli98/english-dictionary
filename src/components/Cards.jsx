import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../context'
import { HiOutlineSpeakerWave } from "react-icons/hi2";



export const Cards = () => {
  const [isPlaying, setIsplaying, cardObject, setCardObject, typedWord, setTypedWord, isSearched, setIsSearched] = useContext(mainContext);

  return (

    <>
      {
        !(isSearched) &&
        <div className='col-sm-8 offset-1'>
          <h5 className='beforeSearch'>
            Search a word from dictionary.
          </h5>
          <hr />
        </div>
      }
      {(isSearched) &&
        <div className="card col-sm-12">
          <div className="row card-body">
            <div className='col-sm-3 card-left-side'>
              <h5 className="card-title">{cardObject.word}</h5>
              <HiOutlineSpeakerWave className='speaker' onClick={() => cardObject.playAudio(isPlaying, setIsplaying)} />
              <audio />
            </div>
            <div className='col-sm-9 card-right-side'>
              <div className='word-detail'>
                <h6 className="card-subtitle mb-2 text-body-secondary">{cardObject.generalUse}</h6>
                <p className="card-text">{cardObject.definition}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}
