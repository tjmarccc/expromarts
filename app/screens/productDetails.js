import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { styles } from "../../constants/styles";
import { Feather } from "@expo/vector-icons";
import { Image, ScrollView, SafeAreaView, TextInput } from "react-native";
import { Button } from "react-native";
import CustomTab from "../../components/CustomTab";
import axios from "axios";

const productDetails = () => {
  const [isFav, setIsFav] = useState(false);
  const [product, setProduct] = useState({});

  const { id } = useLocalSearchParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleFav = () => {
    setIsFav((prevState) => !prevState);
  };


  const [isChosen1, setisChosen1] = useState(false);
  const [isChosen2, setisChosen2] = useState(false);
  const [isChosen3, setisChosen3] = useState(false);
  const [isChosen4, setisChosen4] = useState(false);
  const [isChosen5, setisChosen5] = useState(false);

  //WAY 1 (MULTIPLE FUNCTIONS)

  // const handlechosen1 = () => {
  //   setisChosen1(true);
  //   setisChosen2(false);
  //   setisChosen3(false);
  //   setisChosen4(false);
  //   setisChosen5(false);
  // };

  // const handlechosen2 = () => {
  //   setisChosen2(true);
  //   setisChosen1(false);
  //   setisChosen3(false);
  //   setisChosen4(false);
  //   setisChosen5(false);
  // };

  // const handlechosen3 = () => {
  //   setisChosen3((prevState) => !prevState);
  // };

  // const handlechosen4 = () => {
  //   setisChosen4((prevState) => !prevState);
  // };

  // const handlechosen5 = () => {
  //   setisChosen5((prevState) => !prevState);
  // };
  //  WAY 2 (SINGLE FUNCTION)
  const handleChosen = (value) => {
    switch (value) {
      case 1:
        setisChosen1(true);
        setisChosen2(false);
        setisChosen3(false);
        setisChosen4(false);
        setisChosen5(false);
        break;

      case 2:
        setisChosen1(false);
        setisChosen2(true);
        setisChosen3(false);
        setisChosen4(false);
        setisChosen5(false);
        break;

      case 3:
        setisChosen1(false);
        setisChosen2(false);
        setisChosen3(true);
        setisChosen4(false);
        setisChosen5(false);
        break;

      case 4:
        setisChosen1(false);
        setisChosen2(false);
        setisChosen3(false);
        setisChosen4(true);
        setisChosen5(false);
        break;

      case 5:
        setisChosen1(false);
        setisChosen2(false);
        setisChosen3(false);
        setisChosen4(false);
        setisChosen5(true);
        break;

      default:
        break;
    }
  };

  return (
    <View>
      <View style={styles.productHeader}>
        <Link href={"/screens/searchPage"}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Link>
        <View style={{ justifyContent: "center" }}>
          <Text>Details Product </Text>
        </View>
        <Feather name="shopping-cart" size={24} color="black" />
      </View>
      <View style={styles.productImage}>
        <Image
          source={{ uri: product.image }}
          style={styles.img2}
          resizeMode="cover"
        />
      </View>

      <View style={styles.moneyCon}>
        <View>
          <Text style={{ fontWeight: "500" }}>{product?.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>${product?.price}</Text>
            <Text> ({product?.rating?.count} people buy this)</Text>
          </View>
        </View>
        <Pressable style={styles.heartCon} onPress={handleFav}>
          <Ionicons
            name={isFav ? "heart" : "heart-outline"}
            size={24}
            color={isFav ? "hotpink" : "rgba(90, 90, 90, 0.5)"}
          />
        </Pressable>
      </View>

      <View style={{ marginLeft: 20, paddingVertical: 10 }}>
        <Text style={{ color: "gray" }}>Choose the colour</Text>
      </View>

      <View style={styles.colorCon}>
        <Pressable onPress={() => handleChosen(1)}>
          <View
            style={[
              styles.colorCon1,
              {
                backgroundColor: isChosen1
                  ? "rgba(251, 231, 239, 1)"
                  : "rgba(251, 231, 239, 0.5)",
              },
            ]}
          ></View>
        </Pressable>
        <Pressable onPress={() => handleChosen(2)}>
          <View
            style={[
              styles.colorCon2,
              {
                backgroundColor: isChosen2
                  ? "rgba(240, 240, 240, 1)"
                  : "rgba(240, 240, 240, 0.3)",
              },
            ]}
          ></View>
        </Pressable>
        <Pressable onPress={() => handleChosen(3)}>
          <View
            style={[
              styles.colorCon3,
              {
                backgroundColor: isChosen3
                  ? "rgba(201, 242, 155, 1)"
                  : "rgba(201, 242, 155, 0.3)",
              },
            ]}
          ></View>
        </Pressable>
        <Pressable onPress={() => handleChosen(4)}>
          <View
            style={[
              styles.colorCon4,
              {
                backgroundColor: isChosen4
                  ? "rgba(205, 209, 228, 1)"
                  : "rgba(205, 209, 228, 0.5)",
              },
            ]}
          ></View>
        </Pressable>
        <Pressable onPress={() => handleChosen(5)}>
          <View
            style={[
              styles.colorCon5,
              {
                backgroundColor: isChosen5
                  ? "rgba(90, 90, 90, 1)"
                  : "rgba(90, 90, 90, 0.2)",
              },
            ]}
          ></View>
        </Pressable>
      </View>

      <View style={styles.storeCon}>
        <View style={styles.atCon}>
          <View style={styles.appleCon}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={{ uri: product.image }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "600" }}>Apple Store</Text>
            <Text>online 12 mins ago</Text>
          </View>
        </View>
        <View style={styles.followCon}>
          <Text style={{ fontWeight: "400" }}>Follow</Text>
        </View>
      </View>

      <View style={styles.desCon}>
        <Text style={{ fontWeight: "500" }}>Description of Product</Text>
      </View>

      <View style={styles.loremCon}>
        <Text>{product.description}</Text>
      </View>

      <View style={styles.chartNbuy}>
        <View style={styles.chart}>
          <Link href={"/screens/cart"}>
            <Text style={{ fontWeight: "500", color: "white", fontSize: 15 }}>
              Add to Cart
            </Text>
          </Link>
        </View>

        <View style={styles.buy}>
          <Text style={{ fontWeight: "500", color: "black", fontSize: 15 }}>
            Buy Now
          </Text>
        </View>
      </View>
      <CustomTab />
    </View>
  );
};

export default productDetails;
