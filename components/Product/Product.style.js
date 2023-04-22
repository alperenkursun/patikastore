import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  view1: {
    width: Dimensions.get("window").width / 2,
    padding: 7,
  },
  view1Inner: {
    width: "100%",
    // height: "max-content",
    height: 320,
    backgroundColor: "rgb(236,239,241)",
    padding: 10,
    borderRadius: 10,
  },
  tinyLogo: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  productHeader: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    marginTop: 5,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "rgba(128, 128, 128,1)",
    marginTop: 5,
  },
  inStock: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
    color: "red",
  },
});
