import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export function SettingsScreen({ navigation }) {
  return (
    <View>
      <View>
        <Text> Configurações </Text>
      </View>

      <View>
        <Button
          icon="logout"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Logout
        </Button>
      </View>
    </View>
  );
}
