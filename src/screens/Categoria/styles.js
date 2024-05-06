import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#38532E",
    marginBottom: 30,
    marginTop: 40,
  },
  container01: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 300,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: "#38532E",
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
  },
  card: {
    backgroundColor: "rgba(200, 200, 200, 0.5)", // Meio transparente cinza
    width: 400,
    height: 200,
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#38532E",
  },
  info: {
    fontSize: 15,
    color: "#38532E",
    textAlign: "justify",
  },
  card01: {
    backgroundColor: "rgba(200, 200, 200, 0.5)", // Meio transparente cinza
    width: 400,
    height: 200,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default styles;
