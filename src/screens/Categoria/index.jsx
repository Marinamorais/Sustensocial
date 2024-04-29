import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Category({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nome}</Text>
      <Text style={styles.description}>{data.texto}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
