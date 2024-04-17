import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

import { useNavigation } from "@react-navigation/native";

export default function Colaboradores({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

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
          onPress={() => navigation.navigate("Cadastro", { data })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
