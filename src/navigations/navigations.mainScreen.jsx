import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { MenuBar } from "../components/moléculas/components.menuBar";
import { CourseCard } from "../components/moléculas/components.courseCard";
import { getUser } from "../components/data/database";


export function MainScreen(props) {


  const { email } = props.route.params;

  const user  = getUser(email.email);

  return (
    <View style={styles.MainContainer}>
      <Text> {`Bem vindo, ${user.name}`} </Text>
      {user.disciplines.map((discipline) => (
        <CourseCard
          disciplineName={discipline.courseName}
          disciplineSchedule={discipline.courseSchedule}
          disciplineId={discipline.courseId}
          key={discipline.courseId}
        />
      ))}
      <View style={styles.bottomView}>
        <MenuBar navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomView: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },

  textStyle: {
    color: "#fff",
    fontSize: 22,
  },
});
