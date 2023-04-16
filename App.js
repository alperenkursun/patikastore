import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder="Ara..."></TextInput>
      <View style={styles.productsContainer}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
  },
  header: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 20,
    color: "rgb(128,0,128)",
    fontWeight: "bold",
  },
  search: {
    fontSize: 14,
    padding: 10,
    backgroundColor: "rgb(236,239,241)",
    borderRadius: 10,
  },
  productsContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    flexWrap: "wrap",
    flex: 1,
  },
  view1: {
    backgroundColor: "red",
    width: "50%",
    height: 10,
    flex: 1,
  },
  view2: {
    backgroundColor: "blue",
    width: "50%",
    height: 10,
    flex: 1,
  },
});
