import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MenuBar } from '../components/moléculas/components.menuBar';
import { ProfessorMenuBar } from '../components/moléculas/components.professorMenuBar';
import classes from '../components/data/classes'; 
import { CourseCard } from '../components/moléculas/courseCard';

export function CheckInScreen({navigation}){
    const { course } = classes;
    return(
        <View style={styles.MainContainer}>
            { course.map((course) =>
                 <CourseCard 
                    course={ course } 
                    key={ course.classId }
                    navigation={ navigation }
                />
            )}
            <View style={styles.bottomView}>
                <MenuBar 
                    navigation={ navigation }/>
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