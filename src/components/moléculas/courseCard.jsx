import React from 'react';
import PasswordInput from '../átomos/components.passwordInput';
import EmailInput from '../átomos/components.emailInput';
import { View, Linking, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { ClassDetails } from './classDetails';
import { NavigationContainer } from '@react-navigation/native';



export function CourseCard(props){
    const { course, navigation } = props;
    const { students } = course;
    console.log(students)
    return(      
      <View>        
        { students.map((user) => 
          <ClassDetails 
            users={ user } 
            key={ user.id } 
          />
        )} 
        <Text>
          <Button 
            icon='logout' 
            onPress={ () => navigation.navigate('ClassDetails') }
          >
            { course.className + '\n' }
            { course.classId + '\n' } 
          </Button>
        </Text>
      </View>
    );
}
export default CourseCard;