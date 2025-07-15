document.addEventListener('DOMContentLoaded', () => {
    const fetchAllButton = document.getElementById('fetch-all');
    const filterForm = document.getElementById('filter-form');
    const resultsDiv = document.getElementById('results');

    const translations = {
        gender: {
            female: 'Femenino',
            male: 'Masculino',
            genderless: 'Sin género',
            unknown: 'Desconocido'
        },
        status: {
            alive: 'Vivo',
            dead: 'Muerto',
            unknown: 'Desconocido'
        },
        species: {
            Human: 'Humano',
            Alien: 'Alienígena',
            Robot: 'Robot',
            Humanoid: 'Humanoide',
            Mythological: 'Mitológico',
            unknown: 'Desconocido'
        },
        type: {
            '': 'N/A',
            'Genetic experiment': 'Experimento genético',
            'Superhuman': 'Superhumano',
            'Parasite': 'Parásito',
            'Clone': 'Clon'
        }
    };
    fetchAllButton.addEventListener('click', () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => displayCharacters(data.results))
            .catch(error => displayError(error));
    });

    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const filters = {};
        formData.forEach((value, key) => {
            if (value.trim() !== '') {
                filters[key] = value;
            }
        });

        const queryString = new URLSearchParams(filters).toString();
        const url = `https://rickandmortyapi.com/api/character?${queryString}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => displayCharacters(data.results))
            .catch(error => displayError(error));
    });

    function displayCharacters(characters) {
        resultsDiv.innerHTML = '';

        if (characters.length === 0) {
            resultsDiv.innerHTML = '<p class="error">No se encontraron personajes.</p>';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Especie</th>
                    <th>Tipo</th>
                    <th>Género</th>
                </tr>
            </thead>
            <tbody>
                ${characters.map(char => `
                    <tr>
                        <td><img src="${char.image}" alt="${char.name}" class="character-image"></td>
                        <td>${char.id}</td>
                        <td>${char.name}</td>
                        <td>${char.status}</td>
                        <td>${char.species}</td>
                        <td>${char.type || 'N/A'}</td>
                        <td>${char.gender}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        resultsDiv.appendChild(table);
    }

    function displayError(error) {
        resultsDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
});