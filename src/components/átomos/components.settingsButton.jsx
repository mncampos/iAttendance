import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

export function SettingsButton({navigation})
{
    return(
        <View>
            <IconButton icon="cog-outline" size={60} color='grey' onPress = { () => navigation.navigate('SettingsScreen')}/>
        </View>

    );
}

