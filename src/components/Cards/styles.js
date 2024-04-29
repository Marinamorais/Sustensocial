import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
    flexDirection: "row", // Alteração para organizar os cards lado a lado
  },
  button: {
    backgroundColor: "rgba(245, 245, 245, 0.7)",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 110,
    height: 140,
    position: "absolute",
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    color: "#000",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 10,
    textAlign: "center",
  },
});
