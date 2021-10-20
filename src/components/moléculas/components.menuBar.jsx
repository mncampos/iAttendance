import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MenuButton } from '../átomos/components.MenuButton';


export function MenuBar({navigation})
{
    return(
        <View style={styles.MenuPos}>
        <MenuButton navigation={navigation} iconName='chart-bar' size={20} color='grey' routeName='ReportsScreen'/>  
        <MenuButton navigation={navigation} iconName='checkbox-marked-circle' size={40} color='blue' routeName='CheckInScreen'/>
        <MenuButton navigation={navigation} iconName='cog-outline' size={20} color='grey' routeName='SettingsScreen'/>  

        </View>
    );
}

const styles = StyleSheet.create(
    {
        MenuPos: {
            flexDirection: 'row'
        },
        Report: {
            
        }
    }
);