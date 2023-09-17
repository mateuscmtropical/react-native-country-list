import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CountriesInfo from "./CountriesInfo";

type Common = {
    common: string
}

type Country = {
    name: Common
    capital?: string[]
    region: string
    languages: any
    flags: {
        png: string
        svg: string
    }
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 30,
        flexDirection: 'row',
        borderTopWidth: 1
    },
    countriesInfo: {
        marginLeft: 50
    }
})

const CountriesCard = () => {
    const [countries, setCountries] = useState()

    const promise = useCallback(async () => {
        try {
            const { data } = await axios.get('https://restcountries.com/v3.1/all')

            const countriesData = data.map((country: Country) => {
                const contryLanguage = country.languages
                    ? country.languages[Object.keys(country.languages)[0]]
                    : 'No language'

                const a = {
                    name: country.name.common,
                    capital: country.capital || 'No capital',
                    region: country.region,
                    language: contryLanguage,
                    flag: country.flags.png
                }

                return a
            })

            setCountries(countriesData)
        } catch (error) {
            console.log('Erro na busca dos dados')
            console.log(error)
        }
    }, [])

    useEffect(() => {
        promise()
    }, [])

    return (
        <View>
            <FlatList
                data={countries}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: item.flag }}
                            />
                            <CountriesInfo
                                name={item.name}
                                capital={item.capital}
                                regiao={item.name}
                                lingua={item.language}
                            />
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default CountriesCard;