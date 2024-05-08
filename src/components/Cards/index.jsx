import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe isso se estiver usando o React Navigation
import styles from "./styles";
import Category from "../../screens/Forum";

const Card = ({ title, image }) => {
  const navigation = useNavigation(Category); // Isso é necessário para acessar a navegação

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Card;
