import React from 'react';
import { View } from 'react-native';
import  { LoginInput } from '../components/moléculas/components.loginInput';

export function LoginScreen({navigation})
{
    return(
        <View>
            <LoginInput navigation={navigation}/>
        </View>
    );
}