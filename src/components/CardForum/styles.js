import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7, // Aumentando o padding para 20
    backgroundColor: "#618944", 
    opacity: 0.7,
    borderRadius: 0, // Removendo as bordas
    marginVertical: 5,
    width: 393, // Definindo uma largura de 395px
    height: 340, // Definindo uma altura de 120px
  },
  image: {
    width: "50%", // Definindo uma largura de 40% para a imagem
    height: "80%",
    marginRight: 10,
  },
  description: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
});

export default styles;
