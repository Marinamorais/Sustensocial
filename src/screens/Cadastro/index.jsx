import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";
import styles from "./styles";

export default function Cadastro({ route }) {
  const { data, edit } = route.params;

  useEffect(() => {
    if (edit) {
      setName(data.name);
      setEmail(data.email);
      setTelephone(data.telephone);
      setOng(data.ong);
    } else {
      clearInputs();
    }
  }, [data, edit]);

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ong, setOng] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function handleAddUser() {
    const newUser = {
      id: allUsers.length + 1,
      name,
      email,
      telephone,
      ong,
    };
    setAllUsers([...allUsers, newUser]);
    setName("");
    setEmail("");
    setTelephone("");
    setOng("");
  }

  const clearInputs = () => {
    setName("");
    setEmail("");
    setTelephone("");
    setOng("");
  };

  const handleEditUser = () => {
    const newUser = {
      id: data.id,
      name,
      email,
      telephone,
      ong,
    };
    const userIndex = allUsers.findIndex((user) => user.id === data.id);
    const newUsers = [...allUsers];
    newUsers[userIndex] = newUser;
    setAllUsers(newUsers);
    clearInputs();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Title title="Cadastro" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          value={telephone}
          onChangeText={setTelephone}
          placeholder="Telefone"
        />
        <TextInput
          style={styles.input}
          value={ong}
          onChangeText={setOng}
          placeholder="ONG"
        />
        {edit ? (
          <TouchableOpacity style={styles.button} onPress={handleEditUser}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleAddUser}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.users}>
        <Title title="Usuários" />
        {allUsers.map((user) => (
          <View key={user.id} style={styles.user}>
            <Text style={styles.userText}>{user.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("Colaboradores", { data: user })
              }
            >
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
