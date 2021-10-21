import React from 'react';
import { View, Linking, Text } from 'react-native'


export function Card(props){
    const { users } = props;
   
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