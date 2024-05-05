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
        <Text style={styles.title}>Sobre Nós</Text>
        <CardSobrenos 
          image={require("../../../assets/sobrenos.png.png")} // Corrigido o nome da propriedade
          videoLink="https://www.youtube.com/watch?v=0b9Qz5v9J7o"
          description="Somos uma plataforma de engajamento social, unindo pessoas e organizações para causar um impacto positivo. Valorizamos cada voz e acreditamos no poder das pequenas ações. Nossa comunidade acolhedora compartilha experiências, aprende junto e busca um mundo mais justo e sustentável. Aqui, você encontrará recursos e apoio para fazer a diferença. Junte-se a nós!"
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
