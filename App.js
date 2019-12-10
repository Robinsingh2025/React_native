import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enterGoal, setEnterGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = enteredText => setEnterGoal(enteredText);

  const addGoalHandler = () =>
    setCourseGoal(currentGoals => [...courseGoal, enterGoal]);

  return (
    <View styles={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoal} renderItem={itemData =>() } style={styles.output}>
        {courseGoal.map((course, index) => {
          return (
            
          );
        })}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    marginTop: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 1
  },
  listItem: {
    padding: 10,
    marginVertical: 10,

    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
