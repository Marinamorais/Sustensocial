import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  messageContainer: {
    width: "100%",

    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  messageInput: {
    backgroundColor: "#8DA7507A",
    height: 150, // Aumenta a altura do campo de mensagem
  },
  nameEmailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    flex: 1,
    marginRight: 10,
      },
  emailContainer: {
    flex: 1,
    marginLeft: 10,
  },
  nameInput: {
    backgroundColor: "#8DA7507A",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  emailInput: {
    backgroundColor: "#8DA7507A",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  messageName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageEmail: {
    fontStyle: "italic",
    marginBottom: 5,
  },
  messageText: {
    marginBottom: 10,
  },
});

export default styles;
