import { View, Text } from "react-native";
import styles from "./styles.js";
import React from "react";

export default function Category() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Categoria Sustentavel</Text>

      <View style={styles.container01}>
        <View style={styles.card}></View>
      </View>
    </View>
  );
}
