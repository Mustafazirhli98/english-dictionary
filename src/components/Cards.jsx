import React, { useContext } from 'react'
import { mainContext } from '../context'
import { HiOutlineSpeakerWave } from "react-icons/hi2";



export const Cards = () => {
  const [isPlaying, setIsplaying, cardObject, setCardObject, typedWord, setTypedWord, isSearched, setIsSearched, isError, setIsError, toastNote, setToastNote] = useContext(mainContext);

  return (

    <div className='row'>
      <div className='col-sm-12'>
        {
          !(isSearched) &&
          <div className='col-sm-10 offset-1'>
            <h5 className='beforeSearch'>
              Search a word from dictionary.
            </h5>
            <hr />
          </div>
        }

        {(isSearched) &&
          <div className="card col-sm-12">
            <div className="row card-body">
              <div className='col-sm-12 card-top'>
                <h5 className="card-title">
                  {cardObject.word}
                </h5>
                <div className='types'>
                  {"(" + cardObject.types + ")"}
                </div>
                <HiOutlineSpeakerWave
                  className='speaker'
                  onClick={() => {
                    cardObject.playAudio(isPlaying, setIsplaying)
                    cardObject.showAudioError(setIsError, setToastNote)
                  }} />
                <audio />
              </div>

              <div className='col-sm-12 card-bottom'>
                <div className='word-detail'>
                  <hr className='borderOfDefinition' />
                  <div className="card-text">
                    {cardObject.definition.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li className='definition'>{item.definition}</li>
                          <li className='example'>{item.example}</li>
                        </ul>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        }
      </div>
    </div >
  )
}
