// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("#btnPausar");
// El sonido que podemos reproducir o pausar
const sonido = cargarSonido("Batman .m4a");
$botonReproducir.onclick = () => {
    sonido.play();
};
$botonPausar.onclick = () => {
    sonido.pause();
    sonido.currentTime = 0;
};
