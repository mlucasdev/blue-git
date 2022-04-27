import fetch from 'node-fetch';

const allCharacters = [];

const searchApi = async () => {
    try {
        const allCharactersPromises = [];
        for(let i = 1; i <= 42; i++) {
            const apiResult = fetch(`https://rickandmortyapi.com/api/character?page=${i}`).then(apiResponse => apiResponse.json());
            allCharactersPromises.push(apiResult);
        }
        const allCharactersListResolve = await Promise.all(allCharactersPromises);
        
        for(let i = 0; i < allCharactersListResolve.length; i++) {
            const charactersPage = allCharactersListResolve[i];
            for(let i of charactersPage.results) {
                const objectCharacter = {name: `${i.name}`, image: `${i.image}`};
                allCharacters.push(objectCharacter);
            }
        }
    } catch(err) {
        console.log(err.message);
    }
}
searchApi();