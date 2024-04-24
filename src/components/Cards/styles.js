import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative", // Define o posicionamento relativo para que o card possa ser posicionado absolutamente dentro dele
  },
  button: {
    backgroundColor: "rgba(245, 245, 245, 0.7)", // Cor de fundo com transparência
    padding: 10,
    marginTop: -170,
    borderRadius: 10,
    alignItems: "center",
    width: 150, // Largura fixa
    height: 140, // Altura fixa
    position: "absolute", // Define o posicionamento absoluto para o card
  },
  image: {
    width: 80, // Preenche a largura do container pai
    height: 80, // Altura fixa para a imagem
    borderRadius: 10, // Bordas arredondadas
  },
  title: {
    color: "#000",
    fontSize: 12, // Reduzi o tamanho da fonte
    fontWeight: "500", // Usei "500" para médio, pois "medium" pode não ser reconhecido em todas as versões
    marginTop: 10,
    textAlign: "center",
  },
});
