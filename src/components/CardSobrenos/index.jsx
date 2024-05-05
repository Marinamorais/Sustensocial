import React from "react";
import { View, Text, Image, Linking, ScrollView } from "react-native";
import styles from "./styles";

export default function CardSobrenos({ videoLink, description, images, image }) {
  return (
    <View style={styles.containerSobrenos}>
      <Image source={image} style={styles.logo} />
      <Text style={styles.videoLink} onPress={() => Linking.openURL(videoLink)}>
        Clique aqui para assistir ao vídeo
      </Text>
      <Text style={styles.description}>{description}</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.containerIntegrantes}>
        <View style={styles.integranteGroup}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.integranteImage} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
