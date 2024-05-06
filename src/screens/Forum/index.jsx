import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import CardForum from "../../components/CardForum";

export default function Forum() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState(null);

  const clearFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      setErrorMessage("Por favor, preencha todos os campos.");
    } else if (!email.includes("@")) {
      setErrorMessage("Por favor, insira um endereço de e-mail válido.");
    } else {
      if (editingMessage !== null) {
        const updatedMessages = [...messages];
        updatedMessages[editingMessage] = { name, email, message };
        setMessages(updatedMessages);
        setEditingMessage(null);
      } else {
        setMessages([...messages, { name, email, message }]);
      }
      clearFields();
      setErrorMessage("");
    }
  };

  const handleDeleteMessage = (index) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  };

  const handleEditMessage = (index) => {
    const msgToEdit = messages[index];
    setName(msgToEdit.name);
    setEmail(msgToEdit.email);
    setMessage(msgToEdit.message);
    setEditingMessage(index);
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

          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          <Button title="Enviar" onPress={handleSendMessage} />
        </View>

        <View>
          {messages.map((msg, index) => (
            <View key={index} style={styles.messageContainer}>
              <Text style={styles.messageName}>{msg.name}</Text>
              <Text style={styles.messageEmail}>{msg.email}</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonEditar]}
                  onPress={() => handleEditMessage(index)}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonExcluir]}
                  onPress={() => handleDeleteMessage(index)}
                >
                  <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
