import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { styles } from "../constants/styles";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=6"
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View>
      <View style={styles.recentCon}>
        <Text>Recent Product</Text>

        <View style={styles.filterCon}>
          <Text>Filters</Text>
          <AntDesign name="filter" size={15} color="black" />
        </View>
      </View>

      <View style={styles.productCon}>
        {products.map((item) => (
          <SingleProduct
            key={item.id}
            image={{ uri: item.image }}
            productName={item.title}
            price={item.price}
          />
        ))}
      </View>
    </View>
  );
};

export default RecentProducts;
