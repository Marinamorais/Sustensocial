import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook useNavigation
import styles from "./styles";

export default function Cards() {
  const navigation = useNavigation(); // Use o hook useNavigation para obter o objeto de navegação

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Conecta")} // Navegue para a tela "Conecta" ao pressionar o card
    >
      <Image style={styles.image} source={require("../../../assets/img.png")} />
      <Text style={styles.text}>Conectar para Transformar</Text>
    </TouchableOpacity>
  );
}
