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

          image={require("../../../assets/sobrenos.png.png")}
          videoLink="https://www.youtube.com/watch?v=JGwWNGJdvx8"
          description="Somos uma plataforma de engajamento social, unindo pessoas e organizações para causar um impacto positivo. Valorizamos cada voz e acreditamos no poder das pequenas ações. Nossa comunidade acolhedora compartilha experiências, aprende junto e busca um mundo mais justo e sustentável. Aqui, você encontrará recursos e apoio para fazer a diferença. Junte-se a nós!"

   
          integrantes={[
            {
              name: "Matheus Scaranello",
              image: require("../../../assets/matheus.png"),
            },
            {
              name: "Marina Morais",
              image: require("../../../assets/marina.png"),
            },
            {
              name: "Thayná Vazzoler",
              image: require("../../../assets/thayna.png"),
            },
            {
              name: "Nickolas Lira",
              image: require("../../../assets/nicolas.png"),
            },
            {
              name: "Vitor Mattos",
              image: require("../../../assets/vitor.png"),
            }
        
          ]}
        
        />

    </View>
    </ScrollView>
  );
}