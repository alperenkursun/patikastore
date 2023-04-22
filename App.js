import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import Product from "./components/Product/index.js";
import products_data from "./products_data.json";

const data = products_data;
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>PATIKASTORE</Text>
        <TextInput style={styles.search} placeholder="Ara..."></TextInput>
        <View style={styles.productsContainer}>
          <ScrollView>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({ item }) => (
                <Product
                  title={item.title}
                  price={item.price}
                  imgURL={item.imgURL}
                  inStock={item.inStock}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal={false}
            />
          </ScrollView>
          {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "column",
    // padding: 15,
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
    flexWrap: "wrap",
    // flex: 1,
  },
});
