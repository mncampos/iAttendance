import React from 'react';
import {StyleSheet, View } from 'react-native';
import {MenuBar} from '../components/moléculas/components.menuBar';
import { ProfessorMenuBar } from '../components/moléculas/components.professorMenuBar';

export function CheckInScreen({navigation}){

    return(
        <View style={styles.MainContainer}>

            <View>

            </View>


            <View style={styles.bottomView}>
            <ProfessorMenuBar navigation={navigation}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
     
        bottomView:{
     
          width: '100%', 
          height: 70,  
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'absolute',
          bottom: 0
        },
     
        textStyle:{
     
          color: '#fff',
          fontSize:22
        }
    });