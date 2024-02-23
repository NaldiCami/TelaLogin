import {axios} from "axios";

const POKEMON_API_ADDRESS = "https://pokeapi.co/api/v2/"

const api = axios.create({
    baseURL: POKEMON_API_ADDRESS,
})

const BuscaPokemonPorNome = async (nome) => { // async definicao assincrono 
    const response = await api.get ('pokemon?limit=1000'); // await nao interrompe a aplicacao assincrona e agurda resposta do ususario pelo input 
    const PokemonFiltrados = response.data.results.filter(pokemon => pokemon.name.incluses(nome.toLowerCase())); // response = resposta do filtro da api 

    // async e await trabalham juntos 
};
const pokemonData = await Promise.all(pokemonsFiltrados.map(
    async (pokemon) =>{
        const respDetail = await axios.get(pokemon.url) // aqui pegaremos as informacoes fodas dos poke
        return respDetail.data;
    }
))
return pokemonData

export {BuscaPokemonPorNome}