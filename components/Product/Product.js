import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Product.style.js";

const Product = ({ title, price, imgURL, inStock }) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view1Inner}>
        <Image style={styles.tinyLogo} source={{ uri: imgURL }} />
        <Text style={styles.productHeader}>{title}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.inStock}>{inStock && "STOKTA YOK"}</Text>
      </View>
    </View>
  );
};

export default Product;
