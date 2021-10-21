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
                onPress = { () => Linking.openURL('https://www1.ufrgs.br/portalservicos/PortalServicosLogin.php?Destino=ccd7f388f9a3e25ef6aff3b98c773f65#')}
            >
                Esqueceu sua senha?
            </Button>
        </View>
    );
}