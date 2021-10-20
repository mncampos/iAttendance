import React from 'react';
import PasswordInput from '../átomos/components.passwordInput';
import EmailInput from '../átomos/components.emailInput';
import { View, Linking } from 'react-native'
import { Button } from 'react-native-paper'


export function LoginInput({navigation}){

    return(
        <View>
            <EmailInput/>
            <PasswordInput/>
            <Button 
                mode='contained' 
                color='#0066FF66' 
                onPress = { () => navigation.navigate('CheckInScreen')}
            >
                LOGIN
            </Button>
            <Button 
                mode='text' 
                color='grey' 
                onPress = { () => Linking.openURL('http://www.ufrgs.br/ufrgs/inicial')}
            >
                Esqueceu sua senha?
            </Button>
        </View>
    );
}