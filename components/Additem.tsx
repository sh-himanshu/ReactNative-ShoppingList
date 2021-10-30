import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  addItem: (text: string) => void;
}

const AddItem: React.FC<Props> = ({ addItem }) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
        <FontAwesome name="plus" size={20} color="darkslateblue" />
        <Text style={styles.btnText}>Add Items</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 60, padding: 8, fontSize: 16 },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    paddingLeft: 5,
    fontSize: 20,
    textAlign: "center",
    color: "darkslateblue",
  },
});

export default AddItem;
