export class ReproductorAudio {
    constructor(audioElement, titleElement, currentAudioElement) {
      this.audio = audioElement;
      this.title = titleElement;
      this.currentAudio = currentAudioElement;
    }
  
    loadAudio(cancion) {
      this.title.textContent = cancion;
      this.audio.src = `./music/${cancion}.mp3`;
  
      this.audio.addEventListener("loadedmetadata", () => {
        this.timeSong(this.audio.duration, this.currentAudio);
      });
    }
  
    Play() {
      if (this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  
    ProgressBar(e) {
      const { duration, currentTime } = e.target;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      this.timeSong(currentTime, this.currentAudio);
    }
  
   timeSong(time, element) {
      const totalSeconds = Math.round(time);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      element.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
   
  }
  