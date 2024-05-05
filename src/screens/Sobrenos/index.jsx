// Sobrenos.js
import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import CardSobrenos from "../../components/CardSobrenos";

export default function Sobrenos() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>SUSTENSOCIAL</Text>
        <CardSobrenos 
          image={require("../../../assets/imagem-sobrenos.png")} // Corrigido o nome da propriedade
          videoLink="https://www.youtube.com/watch?v=0b9Qz5v9J7o"
          description="O SustenSocial é um projeto de extensão da Universidade Federal do Rio Grande do Norte (UFRN) que tem como objetivo promover ações de sustentabilidade e responsabilidade social. O projeto foi criado em 2021 e é composto por cinco estudantes de diferentes cursos da UFRN."
          images={[
            require("../../../assets/matheus.png"),
            require("../../../assets/marina.png"),
            require("../../../assets/thayna.png"),
            require("../../../assets/vitor.png"),
            require("../../../assets/nicolas.png")
          ]}
        />
      </View>
    </ScrollView>
  );
}
