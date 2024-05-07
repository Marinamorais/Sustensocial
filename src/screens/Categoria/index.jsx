
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles.js";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Category({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView>
       <View style={styles.container}>
      <Text style={styles.title}>{data.nome}</Text>
      <View style={styles.container01}>
       <Image source={data.image} style={styles.image} />
      </View>
      <View style={styles}>
        <Text style={styles.description}>{data.texto}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.titulo}</Text>
        <Text style={styles.info}>{data.info}</Text>
      </View>
      <View style={styles.card01}>
        <Text style={styles.titulo}>{data.titulo01}</Text>
        <Text style={styles.info}>{data.info01}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
