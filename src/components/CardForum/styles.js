import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7, 
    backgroundColor: "#618944", 
    opacity: 0.7,
    borderRadius: 0, 
    marginVertical: 5,
    width: 393, 
    height: 340, 
  },
  image: {
    width: "50%", 
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
