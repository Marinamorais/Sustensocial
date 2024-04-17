import { View } from "react-native";
import React from "react";
import Title from "../../components/Title";
import CardForum from "../../components/CardForum";
import styles from "./styles";

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Title title={"Profile, sweet!"} />
      <CardForum />
    </View>
  );
}
