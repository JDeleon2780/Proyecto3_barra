function checkInput() {
    // Obtenemos el valor del input
    var userInput = document.getElementById("inputFelicidades").value;
    
    // Verificamos si el usuario escribió "felicidades"
    if (userInput.toLowerCase() === "felicidades") {
        // Si es correcto, redirigimos al video
        window.location.href = "https://www.youtube.com/watch?v=YUC4FH3tSOk";
    } else {
        alert("¡Ups! Asegúrate de escribir 'felicidades' correctamente.");
    }
}
