import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start", // Alteração aqui
    paddingTop: 20, // Adicionando padding no topo para dar espaço
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 50,
    marginBottom: 100,
    width: "80%",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333333",
  },
  telephone: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333333",
  },
  ong: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333333",
  },
  button: {
    backgroundColor: "#00AA00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#CCCCCC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  backButtonText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
