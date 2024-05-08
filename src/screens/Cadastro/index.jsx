import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";
import Styles from "./styles";
import Header from "../../components/Header";

export default function Cadastro({ route }) {
  const { data, edit } = route.params;

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ong, setOng] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (edit) {
      setName(data.name);
      setEmail(data.email);
      setTelephone(resetPhone(data.telephone));
      setOng(data.ong);
    } else {
      clearInputs();
    }
  }, [data, edit]);

  const resetPhone = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, "");
  };

  function handleAddUser() {
    if (!name || !email || !telephone || !ong) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    if (verifyName(name)) {
      return;
    }

    const newUser = {
      id: allUsers.length + 1,
      name,
      email,
      telephone,
      ong,
    };
    setAllUsers([...allUsers, newUser]);
    clearInputs();
  }

  const verifyName = (name) => {
    const nameExists = allUsers.some((user) => user.name === name);
    if (nameExists) {
      Alert.alert("Nome já cadastrado");
      return true;
    }
    return false;
  };

  const handleDelete = (userId) => {
    const newUsers = allUsers.filter((user) => user.id !== userId);
    setAllUsers(newUsers);
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setTelephone("");
    setOng("");
  };

  const handleEditUser = () => {
    if (!name || !email || !telephone || !ong) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    const newUser = {
      id: data.id,
      name,
      email,
      telephone,
      ong,
    };
    const updatedUsers = allUsers.map((user) =>
      user.id === data.id ? newUser : user
    );
    setAllUsers(updatedUsers);
    clearInputs();
    navigation.navigate("Colaboradores", { data: newUser });
  };

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Header title="Cadastro" />

        <View style={Styles.card}>
          <Text style={Styles.title}>Cadastro</Text>

          <View style={Styles.form}>
            <TextInput
              style={Styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={Styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={Styles.input}
              placeholder="Telefone"
              value={telephone}
              onChangeText={setTelephone}
              keyboardType="numeric"
              maxLength={11}
            />
            <TextInput
              style={Styles.input}
              placeholder="ONG"
              value={ong}
              onChangeText={setOng}
            />
          </View>
          {edit ? (
            <TouchableOpacity style={Styles.button} onPress={handleEditUser}>
              <Text style={Styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={Styles.buttoncadastro}
              onPress={handleAddUser}
            >
              <Text style={Styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={Styles.users}>
          <Title title="Usuários" />
          <Text>Total de usuários: {allUsers.length}</Text>
          {allUsers.map((user) => (
            <View key={user.id} style={Styles.user}>
              <Text style={Styles.userText}>{user.name}</Text>
              <TouchableOpacity
                style={Styles.buttonver}
                onPress={() =>
                  navigation.navigate("Colaboradores", { data: user })
                }
              >
                <Text>Ver</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.buttonexcluir}
                onPress={() => handleDelete(user.id)}
              >
                <Text>Excluir</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
