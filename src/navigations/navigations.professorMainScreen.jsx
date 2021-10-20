import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProfessorMenuBar } from '../components/moléculas/components.professorMenuBar';
import users from '../components/data/users';
import { Card } from '../components/moléculas/card';

export function ProfessorMainScreen({navigation}){
    const { student } = users
    return(
        <View style={styles.MainContainer}>
            { student.map((user) => <Card users={ user } key={ user.id } />) }
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