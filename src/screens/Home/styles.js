import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFDF4",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  texto: {
    fontSize: 20,
    color: "#000",
    marginTop: 20,
  },
  mundo: {
    width: 260,
    height: 260,
    borderRadius: 5,
    marginTop: 20,
  },
  texto01: {
    fontSize: 15,
    color: "#000",
    padding: 10,
    marginTop: 20,
    textAlign: "center",
  },
  content02: {
    alignItems: "center",
    marginTop: 20,
  },
  imagemfundo: {
    width: "100%",
    height: 200,
    opacity: 0.6,
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: -20,
  },
});

export default styles;
