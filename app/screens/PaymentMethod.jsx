import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "../../constants/styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


const PaymentMethod = () => {
  return (
    <View>
      <View style={styles.cartHeader}>
        <View style={styles.linkNcart}>
          <Link href={"/screens/cart"}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </Link>
          <View style={{ justifyContent: "center", paddingHorizontal: 30 }}>
            <Text style={{ fontWeight: "bold" }}>Payment Method</Text>
          </View>
        </View>
        <View>
          <Feather name="shopping-cart" size={24} color="black" />
        </View>
      </View>

      <View style={styles.payCon}>
        <View style={{ paddingLeft: 20, paddingVertical: 20 }}>
          <TextInput style={{ fontWeight: "bold" }}>Select existng card</TextInput>
        </View>
        <View style={styles.deliverytimeCon1}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="credit-card" size={20} color="black" />
            <TextInput style={{color:"gray"}}> **** **** **** **** 1934</TextInput>
          </View>
          <MaterialIcons name="delete-outline" size={20} color="gray" />
        </View>
      </View>

      <View style={styles.newCard}>
        <View>
          <TextInput
            style={{ fontWeight: "bold", paddingVertical: 10, paddingLeft: 20 }}
          >
            Or input new card
          </TextInput>
        </View>
        <View>
          <TextInput
           style={{ color: "lightgray", paddingLeft: 20 }}>
            card number
          </TextInput>
        </View>
        <View style={styles.deliverytimeCon1}>
          <TextInput style={{color: "gray"}}>1234 1234 1234 1234</TextInput>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <FontAwesome name="cc-visa" size={20} color="lightblue" />
            <FontAwesome name="cc-mastercard" size={20} color="black" />
          </View>
        </View>

        <View style={styles.expSec}>
          <View>
            <TextInput style={{ color: "gray", paddingBottom: 10 }}>Exp date</TextInput>
            <View style={styles.expCon}>
              <TextInput style={{ color: "gray" }}>mm/yy</TextInput>
            </View>
          </View>
          <View>
            <TextInput style={{ color: "gray", paddingBottom: 10 }}>
              Security Code
            </TextInput>
            <View style={styles.expCon}>
              <TextInput style={{ color: "gray" }}>ccv/csv</TextInput>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            style={{ color: "gray", paddingVertical: 10, marginHorizontal: 20 }}
          >
            Card Holder
          </TextInput>
          <View style={styles.deliverytimeCon1}>
            <TextInput style={{ color: "gray" }}>Enter Card Holder Name </TextInput>
          </View>
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

export default PaymentMethod;
