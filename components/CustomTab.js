import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { Link } from "expo-router";

const CustomTab = () => {
  return (
    <View style={styles.bottomTab}>
      <Link href={"/"}>
        <View style={styles.bottomTabItem}>
          <Entypo name="home" size={24} color="black" />
          <Text>Home</Text>
        </View>
      </Link>

      <Link href={"/screens/wishlist"} style={styles.bottomTabItem}>
        <View style={styles.bottomTabItem}>
          <Entypo name="heart" size={24} color="black" />
          <Text>Wishlist</Text>
        </View>
      </Link>

      <Link href={"/"} style={styles.bottomTabItem}>
        <View style={styles.bottomTabItem}>
          <Ionicons name="document-text-outline" size={24} color="black" />
          <Text>History</Text>
        </View>
      </Link>

      <Link href={"/"} style={styles.bottomTabItem}>
        <View style={styles.bottomTabItem}>
          <FontAwesome5 name="user" size={24} color="black" />
          <Text>Account</Text>
        </View>
      </Link>
    </View>
  );
};

export default CustomTab;
