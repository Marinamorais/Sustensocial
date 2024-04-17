import { View } from "react-native";
import React from "react";
import Title from "../../components/Title";
import CardForum from "../../components/CardForum";

import styles from "./styles";
import Header from "../../components/Header";

export default function UserProfile() {
  return (
    <View style={styles.container}>

      <Header />

      <Title title={"Profile, sweet!"} />
      <CardForum />
    </View>
  );
}
