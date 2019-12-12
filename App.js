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
import GoalItem from "./components/Goal_item";
import GoalInput from "./components/Goal_Input";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  // Removes Item From the list
  const onDelete = goalID => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalID);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput visibility={addMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={onDelete}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
