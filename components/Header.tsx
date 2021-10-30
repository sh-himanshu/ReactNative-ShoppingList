import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#312E81",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#D4D4D4", fontSize: 25 },
});

export default Header;
