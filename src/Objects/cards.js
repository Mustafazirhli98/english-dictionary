export default class CardObject {
    constructor(word, audio, generalUse, definition) {
        this.word = word;
        this.audio = audio;
        this.generalUse = generalUse;
        this.definition = definition;
    }
    playAudio = (isPlaying, setIsplaying) => {
        let audioElement = document.querySelector("audio")
        if (!isPlaying) {
            setIsplaying(true)
            audioElement.src = this.audio
            audioElement.play()
                .catch(() => alert("ses ögesi bulunamadı."))
        }
        setIsplaying(false)
    }
}