import React from "react";
import { View, Text, Image, Linking, ScrollView } from "react-native";
import styles from "./styles";

export default function CardSobrenos({ videoLink, description, image, integrantes }) {
  const renderIntegrantes = () => {
    return integrantes.map((integrante, index) => (
      <View key={index} style={styles.integranteContainer}>
        <Image source={integrante.image} style={styles.integranteImage} />
        <Text style={styles.integranteName}>{integrante.name}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.containerSobrenos}>
      <Image source={image} style={styles.logo} />
      <Text style={styles.videoLink} onPress={() => Linking.openURL(videoLink)}>
        Clique aqui para assistir ao vídeo 
      </Text>
      <Text style={styles.description}>{description}</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.containerIntegrantes}>
        {renderIntegrantes()}
      </ScrollView>
    </View>
  );
}

