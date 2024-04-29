import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe isso se estiver usando o React Navigation
import styles from "./styles";
import Category from "../../screens/Forum";

const Card = ({ title, image }) => {
  const navigation = useNavigation(Category); // Isso é necessário para acessar a navegação

  const onPressButton = () => {
    navigation.navigate("Categoria"); // Isso é necessário para navegar para outra tela
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
