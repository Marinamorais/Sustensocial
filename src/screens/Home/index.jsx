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
    titulo: "“Aprendizagem para corações e mentes”, da Gaia+”",
    info: " Projeto busca medir o quanto os sentimentos e emoções são capazes de impactar a capacidade de aprendizagem, como a Química das Relações. Programa foi desenvolvido pela Universidade de Emory (EUA) e utiliza metodologia científica para melhorar a conexão entre professores e estudantes, fortalecendo a compaixão, a autoconsciência e o engajamento social nas escolas.",
    titulo01: "“Academia de Biotecnologia Agrícola”",
    info01: "Convocar e formar 60 estudantes, dos quais pelo menos 65% são mulheres, com idades entre 13 e os 18 anos, das cidades de Quintero, Quinta Normal e Concón. A capacitação será realizada por meio do uso de kits laboratoriais em casa e sessões online, com o objetivo de familiarizar os participantes com as ferramentas de biotecnologia e formulação de projetos. Pelo menos 12 projetos científicos e tecnológicos serão elaborados para resolver problemas locais.",
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
