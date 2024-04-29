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
    navigation.navigate("Categoria", { data: pegarConteudo(id) });
  };

  const pegarConteudo = (id) => {
    const conteudo = Conteudos.filter((conteudo) => conteudo.id === id);
    return conteudo[0];
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
                <TouchableOpacity
                  onPress={() => {
                    handleCategoria(1);
                  }}
                >
                  <Cards
                    title="Conectar para Transformar"
                    image={require("../../../assets/img.png")}
                    descri="Participe de discussões sobre sustentabilidade"
                    style={styles.cardOverlay}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleCategoria(2);
                  }}
                >
                  <Cards
                    title="Voluntariado Corporativo"
                    image={require("../../../assets/img2.png")}
                    descri="Conheça as ONGs parceiras"
                    style={styles.cardOverlay}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCategoria(3)}>
                  <Cards
                    title="Projetos Incentivados"
                    image={require("../../../assets/img3.png")}
                    descri="Conheça os colaboradores"
                    style={styles.cardOverlay}
                  />
                </TouchableOpacity>
              </View>
              <View />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
