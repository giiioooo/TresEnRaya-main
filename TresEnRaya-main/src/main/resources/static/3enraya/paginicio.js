// Cargamos nuestro sonido a través de su fuente y lo inyectamos de manera oculta
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none";
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("#btnPausar");
//para pausar o reproducir el sonido
const sonido = cargarSonido("Batman .m4a");
$botonReproducir.onclick = () => {
    sonido.play();
};
$botonPausar.onclick = () => {
    sonido.pause();
    sonido.currentTime = 0;
};
