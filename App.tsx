import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert, Appearance } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/Additem";
import { v4 as uuid } from "uuid";

const App = () => {
  const [items, setitems] = useState([
    { id: uuid(), text: "Juice" },
    { id: uuid(), text: "Fruits" },
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Bread" },
  ]);

  const deleteItem = (id: string) =>
    setitems((previousItems) => previousItems.filter((data) => data.id !== id));

  const addItem = (text: string) => {
    if (text) {
      setitems((previousItems) => [{ id: uuid(), text: text }, ...previousItems]);
    } else {
      Alert.alert("Error", "Please enter an item.", [{ text: "ok" }]);
    }
  };
  return (
    <View style={styles.constainer}>
      <Header title="Shopping Lists" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  text: { color: "darkslateblue", fontSize: 25 },
});

export default App;
