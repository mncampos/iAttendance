import React from "react";
import { View} from "react-native";
import { Button } from 'react-native-paper';

export function CourseCard(props) {
  return (
    <View style={{ marginBottom: 10, width: '50%'} }>
      <Button icon='logout' mode='contained' >
        {props.disciplineName + "\n"}
      </Button>
    </View>
  );
}
