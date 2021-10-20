import React, {useState} from 'react';
import { View, Linking } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { LoginValidator } from '../data/loginValidator';


export function LoginInput({navigation}){


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <View>


            <TextInput label="Email" autoCapitalize="none" autoCorrect={false} value={email} onChangeText={email => setEmail(email)}  />
            <TextInput label="Senha" secureTextEntry={true} value={password} onChangeText={password => setPassword(password)}/>
            <Button mode='contained' color='#0066FF66' onPress = { () => {

                const loginResult = LoginValidator( `${email}`, `${password}`);
                if(loginResult == 0)
                alert("Senha ou e-mail inválidos. Tente novamente.");
                if(loginResult == 1){
                alert("Login de aluno confirmado. Seja bem vindo.");
                navigation.navigate("CheckInScreen");
                }
                if(loginResult == 2){
                alert("Login de professor confirmado. Seja bem vindo.");
                navigation.navigate("ProfessorMainScreen");
            }}
                }>
                LOGIN
            </Button>
            <Button mode='text' color='grey' onPress = { () => Linking.openURL('http://www.ufrgs.br/ufrgs/inicial')}>
                Esqueceu sua senha?
            </Button>
        </View>
    );
}