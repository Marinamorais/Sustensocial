import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
import styles from "./styles";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import { useNavigation } from "@react-navigation/native";

const Conteudos = [
  {
    id: 1,
    nome: "Conectar para Transformar",
    image: require("../../../assets/img.png"),
    texto:
      "Selecionamos anualmente projetos de impacto social e ambiental para serem implementados nas cidades onde a empresa atua, com foco nas áreas de educação científica; empregabilidade; ou educação ambiental e proteção dos recursos naturais e da biodiversidade",
  },

  {
    id: 2,
    nome: "Voluntariado Corporativo",
    texto:
      "O compromisso social é uma pedra angular importante de coesão social. Através do voluntariado corporativo, os colaboradores têm a oportunidade de se envolver em projetos sociais e ambientais, contribuindo para o desenvolvimento sustentável das comunidades locais.",
  },
  {
    id: 3,
    nome: "Projetos Incentivados",
    texto:
      "projetos aprovados em leis de incentivo à cultura, aos esportes e pelos Conselhos da Criança e do Adolescente e do Idoso, tendo como base suas metas de impacto em educação científica e ambiental, empregabilidade,proteção de recursos naturais e da biodiversidade.",
  },
];

export default function Home() {
  const navigation = useNavigation();

  const handleCategoria = (id) => {
    const conteudo = Conteudos.find((conteudo) => conteudo.id === id);
    if (conteudo) {
      navigation.navigate("Categoria", { data: conteudo });
    }
  };

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
              <View style={styles.cardsContainer}>
                {Conteudos.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleCategoria(item.id)}
                  >
                    <Cards
                      title={item.nome}
                      image={require("../../../assets/img.png")}
                      descri="Descrição do card..."
                      style={styles.cardOverlay}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
