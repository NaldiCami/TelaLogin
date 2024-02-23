import {React, UseState } from "react";
import { ActivityIndicator, BackHandler, FlatList, TextInput, View } from "react-native"
import { BuscaPokemonPorNome } from "../Service/PokemonService";
import { PokemonItem } from "./pokemonitem";

const HomeScreen = () => {
    const [ItemBusca, setItemBusca] = UseState ("");
    const [Loading, setLoading] = UseState (False);
    const [Pokemon, setPokemon] = UseState ([]);

    const handleBuscaPokemon = async () => {
        setLoading(True);
        try {
            const ListaDeEncontrados = await BuscaPokemonPorNome(ItemBusca);
            setPokemon(ListaDeEncontrados);
        }   catch (err) {
            console.log( "Erro ao buscar Pokemon: " , err)
            setPokemon ([]);
        }
    };
         

    return (
        <View>
            <TextInput value = {ItemBusca}
            onchangeText = {(item) => setItemBusca (item)}
            placeholder = "Digite um pokemon"
            style = {styles.inputText}/>

            <Button title = "Buscar" onPress = {handleBuscaPokemon}/>
            {Loading && <ActivityIndicator style = {styles.spinner}/>}
            <FlatList
            data = {Pokemon}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) => (<PokemonItem pokemon = {item} />)}
            />


        </View>
    )
};

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        borderColor:'gray',
        borderWidht:1,
        marginBotton:10,
        paddingHorizntal:10,
    },
    spinner: {
        marginTop: 20,
    },
    
});
