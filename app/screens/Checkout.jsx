import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { styles } from "../../constants/styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Checkout = () => {
  return (
    <View>
      <View style={styles.cartHeader}>
        <View style={styles.linkNcart}>
          <Link href={"/screens/cart"}>
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

      <View style={styles.checkOut}>
        <View style={styles.imgcartCon1}>
          <Image
            source={require("../../assets/img/img11.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={styles.checkoutCon}>
          <Text style={{ fontWeight: "bold" }}>Airpods max by Apple</Text>
          <Text style={{ color: "gray" }}>Variant:Gray</Text>
          <View style={{ flexDirection: "row", paddingTop: 20, gap: 100 }}>
            <Text style={{ fontWeight: "bold" }}>$1999.99</Text>
            <Text style={{ color: "gray" }}>1 quantity</Text>
          </View>
        </View>
      </View>

      <View style={styles.checkOut}>
        <View style={styles.imgcartCon1}>
          <Image
            source={require("../../assets/img/img7.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={styles.checkoutCon}>
          <Text style={{ fontWeight: "bold" }}>Monitor LG 22" 4K</Text>
          <Text style={{ color: "gray" }}>Variant:120fPS</Text>
          <View style={{ flexDirection: "row", paddingTop: 20, gap: 100 }}>
            <Text style={{ fontWeight: "bold" }}>$299.99</Text>
            <Text style={{ color: "gray" }}>1 quantity</Text>
          </View>
        </View>
      </View>

      <View style={styles.checkOut}>
        <View style={styles.imgcartCon1}>
          <Image
            source={require("../../assets/img/img4.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={styles.checkoutCon}>
          <Text style={{ fontWeight: "bold" }}>Earphone for Monitor </Text>
          <Text style={{ color: "gray" }}>Variant: Combo</Text>
          <View style={{ flexDirection: "row", paddingTop: 20, gap: 100 }}>
            <Text style={{ fontWeight: "bold" }}>$199.99</Text>
            <Text style={{ color: "gray" }}>1 quantity</Text>
          </View>
        </View>
      </View>

      <View style={styles.hideCon}>
        <Text style={{ color: "rgba(151, 200, 165, 0.8)" }}>Hide List</Text>
      </View>

      <View style={styles.deliverytimeCon}>
        <Text>Regular (2-4 days delivery)</Text>
        <AntDesign name="right" size={20} color="black" />
      </View>

      <View style={styles.discountCon}>
        <View style={styles.deliverytimeCon}>
          <TextInput style={{color:"gray",}}>Apply a discount</TextInput>
          <AntDesign name="right" size={20} color="black" />
        </View>
      </View>

      <View style={styles.summaryCon}>
        <Text style={{ fontWeight: "bold" }}>Order Summary</Text>
        <AntDesign name="down" size={20} color="black" />
      </View>

      <View style={styles.totalPricecon}>
        <Text>Totals</Text>
        <Text style={{fontWeight:"bold",}}>$2499.97</Text>
      </View>

      <View style={styles.paymentCon}>
        <Link href={"/screens/PaymentMethod"}>
        <Text style={{fontWeight: "bold", color: "white"}}>Select Payment Method</Text>
        </Link>
      </View>
    </View>
  );
};

export default Checkout;
