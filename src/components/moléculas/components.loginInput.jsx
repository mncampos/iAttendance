import React, {useState} from 'react';
import { View, Linking } from 'react-native'
import { Button, TextInput } from 'react-native-paper'


export function LoginInput({navigation}){

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <View>


            <TextInput label="Email" value={email} onChangeText={email => setEmail(email)}  />
            <TextInput label="Senha" value={password} onChangeText={password => setPassword(password)}/>
            <Button mode='contained' color='#0066FF66' onPress = { () => {

                if(email == "prof")
                navigation.navigate('ProfessorMainScreen');
                else navigation.navigate('CheckInScreen');
            }
                }>
                LOGIN
            </Button>
            <Button mode='text' color='grey' onPress = { () => Linking.openURL('http://www.ufrgs.br/ufrgs/inicial')}>
                Esqueceu sua senha?
            </Button>
        </View>
    );
}