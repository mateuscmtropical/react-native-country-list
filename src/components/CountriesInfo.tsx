import { Text, View } from "react-native";

const CountriesInfo = ({ name, capital, regiao, lingua }: any) => {
    return (
        <View style={{
            marginLeft: 50,
        }}>
            <Text>Nome: {name}</Text>
            <Text>Capital: {capital}</Text>
            <Text>Região: {regiao}</Text>
            <Text>Língua: {lingua}</Text>
        </View>
    );
}

export default CountriesInfo;