import React from 'react';
import {IconButton} from 'react-native-paper';

export function MenuButton(props) 
{

    return(    
        <IconButton icon={props.iconName} color={props.color} size={props.size} onPress = { () => props.navigation.navigate('ReportsScreen') }/>
    );

}