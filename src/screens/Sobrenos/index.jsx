import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../../components/Header";
import CardSobrenos from "../../components/CardSobrenos";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Sobre nós</Text>
      <CardSobrenos image={require("../../../assets/matheus.png")} />
      <CardSobrenos image={require("../../../assets/marina.png")} />
      <CardSobrenos image={require("../../../assets/thayna.png")} />
      <CardSobrenos image={require("../../../assets/nicolas.png")} />
      <CardSobrenos image={require("../../../assets/vitor.png")} />
    </View>
  );
}
