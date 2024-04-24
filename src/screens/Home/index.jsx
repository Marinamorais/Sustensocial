import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../../components/Header";
import Cards from "../../components/Cards";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Text style={styles.texto}>SUSTENSOCIAL</Text>
          <View style={styles.content01}>
            <Image
              style={styles.mundo}
              source={require("../../../assets/mundo.jpg")}
            />

            <Text style={styles.texto01}>
              O SustenSocial é um aplicativo que tem como objetivo incentivar a
              prática de ações sustentáveis. como a ONG, a e colaboradores.
            </Text>
            <View style={styles.content01}>
              <Image
                style={styles.imagemfundo}
                source={require("../../../assets/difi.jpg")}
              />
              <Cards
                title="Conectar para Transformar"
                image={require("../../../assets/img.png")}
                descri="Participe de discussões sobre sustentabilidade"
                style={styles.cardOverlay}
              />
              <View />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
