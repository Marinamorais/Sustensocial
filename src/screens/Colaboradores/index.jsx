import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

import { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

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
      <Title title="Colaboradores" />
      <View style={styles.profile}>
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
    </View>
  );
}
