const conseguirPokemon = document.getElementById('get-pokemon');
const pokemonSelect = document.getElementById('pokemon-select');
const pokemonInfo = document.getElementById('pokemon-info');
const imagenPokemon = document.getElementById('pokemon-image');

// Obtener datos de la API
function getPokemon(selectedPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            mostrarPokemon(data);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Mostrar el pokemon en la pantalla
function mostrarPokemon(data) {
    pokemonInfo.innerHTML = "";

    // Preparamos constantes con datos e imagen del pokemon
    const pokemonName = document.createElement('h2');
    const pokemonPotencia = document.createElement('h2');
    const nombreAbilidad = document.createElement('h2');
    const abilidadPokemon = data.abilities[0].ability.name;
    const imagenUrl = data.sprites.front_default;

    // Asignamos datos a esas constantes
    pokemonName.textContent = 'Nombre del Pokemon: ' + data.name;
    pokemonPotencia.textContent = 'Potencia: ' + data.height;
    nombreAbilidad.textContent = 'Abilidad-1: ' + abilidadPokemon;
    imagenPokemon.src = imagenUrl;
    imagenPokemon.alt = `Imagen de ${data.name}`;

    // Mostramos los datos de las constantes en el HTML
    pokemonInfo.appendChild(pokemonName);
    pokemonInfo.appendChild(pokemonPotencia);
    pokemonInfo.appendChild(nombreAbilidad);
    pokemonInfo.appendChild(imagenPokemon);
}



conseguirPokemon.addEventListener('click', () => {
    const selectedPokemon = pokemonSelect.value;
    console.log('El usuario ha seleccionado:', selectedPokemon);
    getPokemon(selectedPokemon);
});