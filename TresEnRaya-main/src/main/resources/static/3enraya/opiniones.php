<?php
$usuario = "root";
$password = "";
$servidor = "localhost";
$basededatos = "opiniones";

$conexion = mysqli_connect($servidor, $usuario, "") or die("Error con el servidor de la Base de datos.");
$db = mysqli_select_db($conexion, $basededatos) or die("Error conexion al conectarme a la Base de datos");

$opiniones = $_POST['opiniones'];
$email = $_POST['email'];


$sql = "INSERT INTO opiniones VALUES ('$opiniones','$email')";
$ejecutar = mysqli_query($conexion, $sql);

if (!$ejecutar) {
    echo 'hubo algun error';
} else {
    echo "datos guardados correctamente <br><a href= 'paginainicio.html'>volver</a>";
}
?>