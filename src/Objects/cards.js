export default class CardObject {
    constructor(word, audio, allTypes, definitions) {
        this.word = word;
        this.audio = audio;
        this.allTypes = allTypes;
        this.definitions = definitions;
        this.definition = [];
        this.types = [];
    }

    handleDefinition = () => {
        this.definitions.map((item) => {
            if (item.example) {
                this.definition.push(
                    {
                        definition: item.definition,
                        example: "("+ item.example + ")"
                    })
            } else this.definition.push({ definition: item.definition })
        })
    }

    handleTypes = () => {
        this.allTypes.map((item) => {
            this.types.push(item.partOfSpeech)
        })
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
}