import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import styles from "./styles";
import Title from "../../components/Title";

export default function Colaboradores({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  const formatedTelephone =
    data.telephone.length === 11
      ? data.telephone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
      : data.telephone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");

  data.telephone = formatedTelephone;

  return (
    <View style={styles.container}>
      <Header />
      <Title title="Colaboradores" />
      <View style={styles.card}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.email}>{data.email}</Text>
        <Text style={styles.telephone}>{data.telephone}</Text>
        <Text style={styles.ong}>{data.ong}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cadastro", { data, edit: true })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Cadastro", { edit: false })}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
