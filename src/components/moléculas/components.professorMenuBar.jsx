import React from "react";
import { View, StyleSheet } from "react-native";
import { MenuButton } from "../átomos/components.menuButton";

export function ProfessorMenuBar({ navigation }) {
  return (
    <View style={styles.MenuPos}>
      <MenuButton
        navigation={navigation}
        iconName="chart-bar"
        size={20}
        color="grey"
        routeName="ReportsScreen"
      />
      <MenuButton
        navigation={navigation}
        iconName="share-variant"
        size={20}
        color="grey"
        routeName="CodeScreen"
      />
      <MenuButton
        navigation={navigation}
        iconName="map-marker-plus"
        size={40}
        color="blue"
        routeName="NewCheckInScreen"
      />
      <MenuButton
        navigation={navigation}
        iconName="pencil"
        size={20}
        color="grey"
        routeName="EditScreen"
      />
      <MenuButton
        navigation={navigation}
        iconName="cog-outline"
        size={20}
        color="grey"
        routeName="SettingsScreen"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MenuPos: {
    flexDirection: "row",
  },
  Report: {},
});
