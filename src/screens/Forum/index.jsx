import { View, Text, Button, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Header from "../../components/Header";
import CardForum from "../../components/CardForum";

export default function Forum() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMessage = () => {
    if (name && email.includes("@") && message) {
      const newMessage = {
        name: name,
        email: email,
        message: message,
      };
      setMessages([...messages, newMessage]);
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage("");
    } else {
      setErrorMessage("Por favor, preencha todos os campos corretamente.");
    }
  };

  const handleDeleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>SUSTENSOCIAL</Text>
        <CardForum
          image={require("../../../assets/imagemforum.png")}
          description="Oferecemos um espaço para os funcionários compartilharem ideias, experiências e recursos relacionados ao engajamento social. Isso inclui fóruns de discussão, grupos de interesse e ferramentas de colaboração online."
        />

        <View style={styles.messageContainer}>
          <Text style={styles.label}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            value={message}
            onChangeText={setMessage}
            placeholder="Digite sua mensagem"
            multiline
          />

          <View style={styles.nameEmailContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={[styles.input, styles.nameInput]}
                value={name}
                onChangeText={setName}
                placeholder="Digite seu nome"
              />
            </View>

            <View style={styles.emailContainer}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={[styles.input, styles.emailInput]}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
              />
            </View>
          </View>

          {errorMessage && !email.includes("@") ? (
            <Text style={styles.errorMessage}>
              Por favor, insira um endereço de e-mail válido.
            </Text>
          ) : null}

          {errorMessage && (name === "" || message === "") ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          <Button title="Enviar" onPress={handleSendMessage} />
        </View>

        {/* Exibe as mensagens */}
        <View>
          {messages.map((msg, index) => (
            <View key={index} style={styles.messageContainer}>
              <Text style={styles.messageName}>{msg.name}</Text>
              <Text style={styles.messageEmail}>{msg.email}</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
              <Button
                title="Excluir"
                onPress={() => handleDeleteMessage(index)}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
