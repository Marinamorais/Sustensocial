import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function SignupForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSendMessage = () => {
    // Lógica para enviar a mensagem
    console.log("Mensagem:", message);
    console.log("Nome:", name);
    console.log("Email:", email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui a sua mensagem"
          onChangeText={setMessage}
          value={message}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={handleSendMessage} />
      </View>
    </View>
  );
}
