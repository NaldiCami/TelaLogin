import react from "react";
import { TouchableOpacity, View } from "react-native";
const PokemonItem = ({pokemon}) => {
    const {

        name: nome,// renomeando o name para nome, ficar mais usual
        height: altura,
        weight : peso

    } = pokemon;

};

return(
    <TouchableOpacity onPress = {() => {}}>
        <View> 
            <Text>{'Nome: ${nome}'}
            </Text>
            <Text> {'Altura: ${altura}'}</Text>
            <Text>{'Peso: ${peso}'}</Text>
            <Image> source = {{uri: pokemon.sprites.front_defalt }}
                    style = {{with: 50, height: 50}}
            </Image>
        </View>
    </TouchableOpacity>
);

export {PokemonItem};