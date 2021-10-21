import React from "react";
import { View, Text } from "react-native";

export function CourseCard(props) {
  
  const { users } = props;

  return (
    <View>
      <Text>
        {users.name + "\n"}
        {users.email + "\n"}
        {users.id + "\n"}
      </Text>
    </View>
  );
}
