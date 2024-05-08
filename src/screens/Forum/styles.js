import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor:"#FCFDF4",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    marginTop: 20,
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  messageContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 20,
    marginTop: 10,
    paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#8DA7507A",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 150,
    backgroundColor: "#8DA7507A",
  },
  nameEmailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
  button: {
    padding: 10,
    borderRadius: 8,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonEditar: {
    backgroundColor: "#4CAF50",
  },
  buttonExcluir: {
    backgroundColor: "#F44336",
  },
});

export default styles;
