let charctersList = document.getElementById('charactersList');
let searchBar = document.getElementById('searchBar');
let hpCharacters = [];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredCharacters = hpCharacters.filter(character => {
        return character.name.includes(searchString) || character.house.includes(searchString)
    })
    console.log(filteredCharacters);
    displayCharacters(filteredCharacters)
});

const loadCharacters = async () => {
    try {
        const response = await fetch("https://hp-api.herokuapp.com/api/characters");
        hpCharacters = await response.json();
        console.log(hpCharacters);
        displayCharacters(hpCharacters)
    }
    catch (err) {
        console.log(err)
    }
}

const displayCharacters = (hpCharacters) => {
    const htmlString = hpCharacters.map(character => {
        return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"/>
            </li>
        `
    })
    charctersList.innerHTML = htmlString;
}

loadCharacters();