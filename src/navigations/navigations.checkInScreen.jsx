import React from "react";
import { StyleSheet, View } from "react-native";
import { MenuBar } from "../components/moléculas/components.menuBar";
import { disciplines } from "../components/data/database";
import { CourseCard } from "../components/moléculas/components.courseCard";

export function CheckInScreen({ navigation }) {
  const { course } = disciplines;
  return (
    <View style={styles.MainContainer}>
      {course.map((discipline) => (
        <CourseCard
          disciplineName={discipline.courseName}
          disciplineSchedule={discipline.courseSchedule}
          disciplineId={discipline.courseId}
          key={discipline.courseId}
          
        />
      ))}
      <View style={styles.bottomView}>
        <MenuBar navigation={navigation} />
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
