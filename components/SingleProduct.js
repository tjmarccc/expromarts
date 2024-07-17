import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { Link } from "expo-router";

const SingleProduct = ({ price, image, productName, id }) => {
  return (
    <Link href={`/screens/productDetails?id=${id}`} style={styles.productConItem}>
      <Image source={image} style={styles.img7} />
      <Text
        style={{ marginLeft: 10, marginVertical: 5 }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {productName}
      </Text>
      <Text style={{ marginLeft: 10, fontWeight: "bold" }}>${price}</Text>

      <View style={styles.cartCon}>
        <Text style={{ color: "white" }}>Add to Cart</Text>
      </View>
    </Link>
  );
};

export default SingleProduct;
