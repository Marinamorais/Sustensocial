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
          videoLink="https://youtube.com/shorts/F3qa9ia5Djg?si=W29wV9dYdrMwGMUu"
          description="Somos uma plataforma de engajamento social, unindo pessoas e organizações para causar um impacto positivo. Valorizamos cada voz e acreditamos no poder das pequenas ações. Nossa comunidade acolhedora compartilha experiências, aprende junto e busca um mundo mais justo e sustentável. Aqui, você encontrará recursos e apoio para fazer a diferença. Junte-se a nós!"
          integrantes={[
            {
              name: "Matheus Scaranello",
              funcao: "Gerente de Projeto",
              image: require("../../../assets/matheus.png"),
            },
            {
              name: "Marina Morais",
              funcao: "Designer de UI/UX",
              image: require("../../../assets/marina.png"),
            },
            {
              name: "Thayná Vazzoler",
              funcao: "Especialista em ESG",
              image: require("../../../assets/thayna.png"),
            },
            {
              name: "Nickolas Lira",
              funcao: "Analista de qualidade",
              image: require("../../../assets/nicolas.png"),
            },
            {
              name: "Vitor Mattos",
              funcao: "Documentador",
              image: require("../../../assets/vitor.png"),
            },
          ]}
        />
      </View>
    </ScrollView>
  );
}
