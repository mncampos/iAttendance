import React from "react";
import { View} from "react-native";
import { Button } from 'react-native-paper';

export function CourseCard(props) {
  return (
    <View style={{ marginBottom: 10, width: '95%'} }>
      <Button mode='contained' >
        {props.disciplineName}
      </Button>
    </View>
  );
}
