/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
// function iniciarJuego() {

//       // saludamos al usuario
//       alert("Bienvenido al piedra papel o tijera de Frontend II.");
//       // guardamos en una variable en nombre ingresado
//       const nombre = prompt("Ingese su nombre por favor:")
  
//       alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
  
//       // mostramos los datos por consola
//       console.log("----------------------------");
//       console.log("El jugador es:")
//       console.log(nombre);
//       console.log("----------------------------");
  
//       return nombre;
//   }

  /* -------------------------------------------------------------------------- */
  /*                          CONSIGNA MESA DE TRABAJO                          */
  /* -------------------------------------------------------------------------- */
  // 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
  // 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
  // 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

  function iniciarJuego() {
    let nombre = '';
  
    // Solicitar nombre válido (más de 3 caracteres y no vacío)
    do {
        nombre = prompt("Ingrese su nombre por favor:");
        if (nombre === null) {
            return null; // Si cancela, sale de la función. Devuelve NULL.
        }
        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres. Por favor, inténtelo de nuevo.");
        }
    } while (nombre.length < 3);
  
    // Convertir nombre a mayúsculas
    nombre = nombre.toUpperCase();
  
    // Saludar al usuario
    alert("Gracias por jugar, " + nombre + ". ¡Mucha suerte!");
  
    // Mostrar nombre por consola
    console.log("****************************");
    console.log("El jugador es:");
    console.log(nombre);
    console.log("****************************");
  
    return nombre;
  }

  iniciarJuego();