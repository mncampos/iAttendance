import React from 'react';
import PasswordInput from '../átomos/components.passwordInput';
import EmailInput from '../átomos/components.emailInput';
import { View, Linking, Text } from 'react-native'
import { Button } from 'react-native-paper'


export function Card(props){
    const { users } = props;
    console.log(users);
    return(      
      <View>
        <Text>
          { users.name + '\n' }
          { users.email + '\n' }
          { users.id + '\n' }
        </Text>
      </View>
    );
}
export default Card;