import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";
import { View } from "react-native";
import React from "react";
import styles from "./styles";
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
      setTelephone(data.telephone);
      setOng(data.ong);
    } else {
      clearInputs();
    }
  }, [data, edit]);

  function handleAddUser() {
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
    <View style={styles.container}>
      <Title title="Cadastro" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="numeric"
          maxLength={11}
        />
        <TextInput
          style={styles.input}
          placeholder="ONG"
          value={ong}
          onChangeText={setOng}
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDelete(user.id)}
            >
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Header />
    </View>
  );
}
