import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styles } from "../../constants/styles";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import CartItem from "./CartItem";

const data = [
  {
    id: 1,
    img: require("../../assets/img/img11.jpg"),
    name: "Air pods max by Apple",
    color: "Gray",
    price: 1999.99,
  },
  {
    id: 2,
    img: require("../../assets/img/img7.jpg"),
    name: "Monitor LG 22'4k 120.",
    color: "120Fps",
    price: 299.99,
  },
  {
    id: 3,
    img: require("../../assets/img/img4.jpg"),
    name: "Earphones for monitor",
    color: "combo",
    price: 199.99,
  },
];

const cart = () => {
  const [dataSet, setDataSet] = useState(data);

  return (
    <View>
      <View style={styles.cartHeader}>
        <View style={styles.linkNcart}>
          <Link href={"/screens/productDetails"}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </Link>
          <View style={{ justifyContent: "center", paddingHorizontal: 30 }}>
            <Text style={{ fontWeight: "500" }}>Your cart</Text>
          </View>
        </View>
        <View>
          <Feather name="shopping-cart" size={24} color="black" />
        </View>
      </View>

      <View style={styles.deliveyDetails}>
        <View>
          <Text>Delivery To</Text>
        </View>
        <View style={styles.cityCon}>
          <Text>Salatiga City, Central Java </Text>
          <FontAwesome5 name="chevron-down" size={16} color="black" />
        </View>
      </View>

      {dataSet.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          dataSet={dataSet}
          setDataSet={setDataSet}
        />
      ))}
      <View style={styles.checkoutBtn}>
        <Link href={"/screens/Checkout"}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>CHECKOUT</Text>
        </Link>
      </View>
    </View>
  );
};

export default cart;
