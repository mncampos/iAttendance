import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

export function CheckInButton({navigation})
{
    return(
        <View>
            <IconButton icon="checkbox-marked-circle"  color='blue' size={80} onPress = { () => navigation.navigate('QRScreen')}/>
        </View>

    );
}

