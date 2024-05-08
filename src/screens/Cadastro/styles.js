import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginTop: 100,
    backgroundColor: "#rgb(207, 218, 177)",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
    textAlign: "center",
  },
  form: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#333333",
    borderWidth: 1,
    borderColor: "black",
  },
  buttoncadastro: {
    paddingVertical: 15,
    backgroundColor: "#38532E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    paddingVertical: 5,
  },
  buttonver: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "20%", // Alterado para 45% da largura total
    marginLeft: 100,
    backgroundColor: "#FF6347",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonexcluir: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "20%", // Alterado para 45% da largura total
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#4682B4",
  },

  error: {
    color: "#FF0000",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  users: {
    marginBottom: 20,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#rgb(207, 218, 177)",
  },
  userText: {
    fontSize: 16,
    color: "#333333",
  },
});

export default Styles;
