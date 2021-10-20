import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ReportsButton } from '../átomos/components.reportsButton';
import { SettingsButton } from '../átomos/components.settingsButton';
import { CheckInButton } from '../átomos/components.checkInButton';

export function MenuBar({navigation})
{
    return(
        <View style={styles.MenuPos}>
            <ReportsButton style={styles.Report}  navigation={navigation}/>    
            <CheckInButton navigation={navigation}/>
            <SettingsButton  navigation={navigation}/>
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