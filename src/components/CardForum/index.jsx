import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function CardForum({ image, description }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
