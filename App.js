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
  const [courseGoals, setCourseGoals] = useState([
    "walk dog",
    "drink mangolassi"
  ]);

  const goalInputHandler = enteredText => setEnterGoal(enteredText);

  const addGoalHandler = () =>
    setCourseGoals(currentGoals => [...courseGoals, enterGoal]);

  return (
    <View styles={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <Button title="Singh" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={({ item }) => {
          console.log(item);
          return <Text>{item}</Text>;
        }}
      />
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
