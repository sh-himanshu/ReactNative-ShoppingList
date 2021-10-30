import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Props {
  item: { id: string; text: string };
  deleteItem: (id: string) => void;
}

const ListItem: React.FC<Props> = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Entypo
          name="squared-cross"
          size={24}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 14,
    backgroundColor: "lightgrey",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: { flexDirection: "row", justifyContent: "space-between" },
  listItemText: { fontSize: 18 },
});

export default ListItem;
