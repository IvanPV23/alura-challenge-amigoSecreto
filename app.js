// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // variable para almacenar los nombres de los amigos.

// Función para agregar un nombre a la lista.
function agregarAmigo() {
    
    // Por si anteriormente el <li> resultado fue modificado, lo limpiamos.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Recuperamos el valor del input y eliminamos espacios al inicio y al final.
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim(); 

    // Validar que el campo no esté vacío.
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre); // Añadir el nombre al array de amigos.

    amigoInput.value = ''; // Limpiar el campo de entrada

    mostrarListaAmigos(); // Actualiza la lista de amigos en el html
}

// Función para mostrar la lista de amigos en el HTML.
function mostrarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar.

    // Recorrer el array y añadir cada nombre a la lista.
    amigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo de la lista.
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    // Validar que haya al menos un amigo en la lista.
    if (amigos.length == 0) {
        resultado.innerHTML = 'La lista de amigos está vacía!';
        return;
    }
    
    // Generar un índice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado.
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página.
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}