import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

export function ReportsButton({navigation})
{
    return(
        <View>
            <IconButton icon="chart-bar" size={60} color='grey' onPress = { () => navigation.navigate('ReportsScreen')}/>
        </View>

    );
}

