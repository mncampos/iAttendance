import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import {OutlinedNumber} from '../components/átomos/components.outlinedNumber';

export function CodeScreen()
{
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    return(
        <View>
        <View style={styles.container}>
            <Text style={styles.text}>
            <OutlinedNumber number={code[0]}/>
            <OutlinedNumber number={code[1]}/>
            <OutlinedNumber number={code[2]}/>
            <OutlinedNumber number={code[3]}/>
            </Text>
        </View>

        <View>
            <Text>
            {"\n" + "Digite este código no Website para gerar o CheckIn"}
            </Text>
        </View>
</View>
    );

}

const styles = StyleSheet.create(
{
    container:{

        flexDirection:"row",
        justifyContent: 'center'
        
    },

    text:{
        fontSize: 60
    }
}
);