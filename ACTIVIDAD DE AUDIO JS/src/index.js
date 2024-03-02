//import { CircularDoublyLinkedList } from "./models/DoblyLinkedlistCircular.js";
import { listanueva } from "./dependencia.js";
import { ReproductorAudio } from "./controllers/ReproductorAudio.js";

const audio = document.querySelector("audio");
const title = document.querySelector("h1");
const current_audio = document.getElementById("current_audio");
const volumen = document.querySelector('.volumen');
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const canciones = ["Die For You", "Habits - Vintage 1930's Jazz Tove Lo Cover ft. Haley Reinhart", "Ray Charles - Hit The Road Jack (Official Lyrics Video)"];


const audioList = listanueva
canciones.forEach(cancion => audioList.addNode(cancion));

const reproductor = new ReproductorAudio(audio, title, current_audio);

function cambiarCancion(direccion) {
  const nuevaCancion = direccion === 1 ? audioList.getNext() : audioList.getPrev();
  reproductor.loadAudio(nuevaCancion);
  audio.play();
}
volumen.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
  })

play.addEventListener("click", () => reproductor.Play());
prev.addEventListener("click", () => cambiarCancion(-1));
next.addEventListener("click", () => cambiarCancion(1));
audio.addEventListener("timeupdate", (e) => reproductor.ProgressBar(e));
audio.addEventListener("ended", () => cambiarCancion(1));


reproductor.loadAudio(audioList.actual.datos);
audio.play();
