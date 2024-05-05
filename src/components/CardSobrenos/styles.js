// CardSobrenos/styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerSobrenos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5DC", // Fundo creme claro
  },
  videoLink: {
    fontSize: 20,
    color: "#0000FF", // Azul
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  containerIntegrantes: {
    flexDirection: "row",
    justifyContent: "center",
  },
  integranteGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
  integranteImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 10,
  },
});

export default styles;
