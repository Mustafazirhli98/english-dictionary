export default class CardObject {
    constructor(word, audio, generalUse, definition, typedWord) {
        this.word = word;
        this.audio = audio;
        this.generalUse = generalUse;
        this.definition = definition;
        this.typedWord = typedWord;
    }
    playAudio = (isPlaying, setIsplaying) => {
        let audioElement = document.querySelector("audio");
        if (!isPlaying) {
            setIsplaying(true);
            audioElement.src = this.audio;
            audioElement.play().catch((error) => {
                console.error("Error while playing audio:", error);
            });
        }
        setIsplaying(false);
    }

    showAudioError = (setIsError, setToastNote) => {
        if (this.audio === "") {
            setToastNote("Audio is not found.");
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    }

    // showEmptyError = (setIsError, setToastNote) => {
    //     setToastNote("Audio is not found.");
    //     setIsError(true);
    //     setTimeout(() => {
    //         setIsError(false);
    //     }, 2000);
    // }

    showNotFoundError = (setIsError, setToastNote) => {
        setToastNote("Word can't be found.")
        setIsError(true)
        setTimeout(() => {
            setIsError(false)
        }, 2000)
    }
}