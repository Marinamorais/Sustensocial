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
    titulo: "Aprendizagem para corações e mentes”, da Gaia+",
    info: "Projeto busca medir o quanto os sentimentos e emoções são capazes de impactar a capacidade de aprendizagem, como a Química das Relações. Programa foi desenvolvido pela Universidade de Emory (EUA) e utiliza metodologia científica para melhorar a conexão entre professores e estudantes, fortalecendo a compaixão, a autoconsciência e o engajamento social nas escolas.",
    titulo01: "Ateliê 60+”, da Burburinho Cultural Produções Artísticas",
    info01:
      "Prevê a alfabetização e inclusão digital de idosos em parceria com o CRAS – Centro de Referência de Assistência Social –  que atende aos moradores do Engenheiro Neiva e adjacências. A ação inclui a montagem de um laboratório de informática no CRAS e, ao final do projeto, a turma de idosos, junto com seus familiares, produzirá fotos ou vídeos digitais e/ou outras ações previstas pelos educadores para exibição em um evento.",
  },

  {
    id: 2,
    nome: "Voluntariado Corporativo",
    image: require("../../../assets/img2.png"),
    texto:
      "O compromisso social é uma pedra angular importante de coesão social. Através do voluntariado corporativo, os colaboradores têm a oportunidade de se envolver em projetos sociais e ambientais, contribuindo para o desenvolvimento sustentável das comunidades locais.",
    titulo: "Engajamento Social",
    info: "O Engajamento Social faz parte da estratégia de sustentabilidade da empresa. E entre as frentes de atuação está o Programa de Voluntariado.",
    titulo01: "Voluntariado Corporativo  ONU",
    info01:
      "Todas as atividades desenvolvidas pelos voluntários estão conectadas com os Objetivos do Desenvolvimento Sustentável (ODSs) da Organização das Nações Unidas - ONU -, que estabelece as metas que devemos perseguir até 2030 para proteger o planeta. Em 2021, contamos com 17 Comissões de Voluntariado, com mais de 1000 voluntários, que contribuíram com 75 ações em 10 meses, impactando mais de 65 mil pessoas, na América do Sul.",
  },
  {
    id: 3,
    nome: "Projetos Incentivados",
    image: require("../../../assets/img3.png"),
    texto:
      "projetos aprovados em leis de incentivo à cultura, aos esportes e pelos Conselhos da Criança e do Adolescente e do Idoso, tendo como base suas metas de impacto em educação científica e ambiental, empregabilidade,proteção de recursos naturais e da biodiversidade para o nosso mundo.",
    titulo: "Nossa História",
    info: "Como parte de nossa estratégia de engajamento social, patrocinamos, durante o ano de 2021, 38 projetos por meio de leis de incentivo fiscal (33 no Brasil, 4 no Chile e 1 na Argentina), que somaram investimentos de aproximadamente R$ 6,5 milhões. Entre os projetos incentivados, realizados em 2021.",
    titulo01: "Campo da leitura",
    info01:
      "Patrocinamos a restauração de espaços físicos e acervos de oito bibliotecas comunitárias nos estados brasileiros de Bahia, Goiás, Mato Grosso, Minas Gerais, Rio Grande do Sul, São Paulo e Tocantins. O projeto Leitura no Campo é realizado pela Rede Educare e conta com o patrocínio da BASF, via Lei de Incentivo à Cultura da Secretaria Especial de Cultura. Em 2021, sete bibliotecas ou espaços de leitura foram readequados e receberam doação de acervos no Brasil.",
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
              prática de ações sustentáveis. como a ONG, a e colaboradores. O
              app é uma plataforma de conexão entre ONGs, colaboradores e
              pessoas que desejam contribuir com a sustentabilidade do planeta.
              O SustenSocial é um aplicativo que tem como objetivo incentivar a
              prática de ações sustentáveis. como a ONG, a e colaboradores. O
              app é uma plataforma de conexão entre ONGs, colaboradores e
              pessoas que desejam contribuir com a sustentabilidade do planeta.
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
