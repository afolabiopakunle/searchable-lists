
let charctersList = document.getElementById('charactersList');
let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});

console.log(searchBar);
const loadCharacters = async () => {
    try {
        const response = await fetch("https://hp-api.herokuapp.com/api/characters");
        let hpCharacters = await response.json();
        console.log(hpCharacters);

        const displayCharacters = (hpCharacters) => {
            const htmlString = hpCharacters.map(character => {
                return `
                    <li class="character">
                        <h2>${ character.name }</h2>
                        <p>House: ${ character.house }</p>
                        <img src="${ character.image }"/>
                    </li>
                `
            })

            charctersList.innerHTML = htmlString;
        }
        displayCharacters(hpCharacters)
    }

    catch(err) {
        console.log(err)
    }
}

loadCharacters();