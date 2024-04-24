import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDF4",
  },
  title: {
    fontSize: 20,
    margin: 15,
  },
  message: {
    width: "90%",
    margin: 15,
    backgroundColor: "#F2F2EE",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  messages: {
    width: "90%",
    margin: 15,
    backgroundColor: "#8DA7507A",
  },
  messageCard: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  messageName: {
    fontWeight: "bold",
  },
  messageEmail: {
    color: "gray",
  },
  messageText: {
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
  },
  messageContainer: {
    marginBottom: 10,
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});

export default styles;
