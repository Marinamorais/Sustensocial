import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Category({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nome}</Text>
      <View style={styles.container01}>
        <Image source={data.image} style={styles.image} />
      </View>
      <View style={styles.card}>
        <Text style={styles.description}>{data.texto}</Text>
      </View>
      <View style={styles.titulo}>
        <Text style={styles.titulo}>{data.titulo}</Text>
      </View>
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
