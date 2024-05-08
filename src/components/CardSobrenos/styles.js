import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerSobrenos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FCFDF4",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#00AA00",
  },
  videoLink: {
    fontSize: 20,
    color: "#00AA00",
    marginBottom: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#333333",
    lineHeight: 24,
    fontStyle: "italic",
  },
  containerIntegrantes: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  integranteGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
  integranteImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#00AA00",
  },
  integranteName: {
    textAlign: "center",
    fontWeight: "bold", // Mudança feita aqui de fontStyle para fontWeight
  },
  funcao: {
    textAlign: "center",
    fontWeight: "bold", // Mudança feita aqui de fontStyle para fontWeight
  },
});

export default styles;
