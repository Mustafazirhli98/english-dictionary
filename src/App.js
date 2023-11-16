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
      <div className="container ">
        <div className='row'>
          <div className='col-sm-12 searchSection'>
            <Search />
          </div>
          <div className='col-sm-12 cardSection'>
            <Cards />
          </div>
        </div>
      </div>
    </mainContext.Provider>
  );
}

export default App;

//Api'yi bul. Eğer tüm kelimelere erişemiyorsan anasayfada input ve bir bölüm daha olacak. İnputta aratılan kelime inputun altına gelecek.
//card yapısını, inputu ve sayfa tasarımını oluştur
//önyüzde word/origin/audio
//arka yüzde partOfSpeech/definition/example
//cardların üzerinde hoparlör butonu olacak ve kelime yazacak. Ayrıca butona basınca telafuz gelecek.
//inputtan aranan kelimeye göre card çıkacak.
//cardlarda kelimelerin ingilizce açıklamaları da yazacak.
//oop yapısı kurulacak.
//data çekme işlemi senkron olarak yapılacak. Önce kelime, sonra açıklama, sonra ses.