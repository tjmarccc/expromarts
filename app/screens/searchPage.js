import React, { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import CustomTab from "../../components/CustomTab";
import axios from "axios";

const SearchPage = () => {
  const [searchproducts, setSearchProducts] = useState([]);

  const GetProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setSearchProducts(response.data);
      r;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.mainTextCon}>
          <Link href={"/"}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </Link>
          <TextInput style={styles.textCon} placeholder="Search" />
          <AntDesign
            name="search1"
            size={15}
            color="black"
            style={{ position: "absolute", left: 60 }}
          />
          <Feather name="shopping-cart" size={24} color="black" />
        </View>

        <View style={styles.searchCon}>
          {searchproducts.map((item) => (
            <SingleProduct
              key={item.id}
              image={{ uri: item.image }}
              productName={item.title}
              price={item.price}
              id={item.id}
            />
          ))}
        </View>
      </ScrollView>
      <CustomTab />
    </>
  );
};

export default SearchPage;
