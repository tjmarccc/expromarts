import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SingleProduct from "../components/SingleProduct";
import {
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { styles } from "../constants/styles";
import { Link } from "expo-router";
import CustomTab from "../components/CustomTab";
import Categories from "../components/Categories";
import RecentProducts from "../components/RecentProducts";
import FeaturedPosts from "../components/FeaturedPosts";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.headerCon}>
              <View style={styles.deliveryCon}>
                <Text style={{ fontSize: 10, color: "grey" }}>
                  Delivery address
                </Text>
                <View style={styles.locationCon}>
                  <Text>Salatiga City, Central Java</Text>
                  <FontAwesome5 name="chevron-down" size={16} color="black" />
                </View>
              </View>

              <View style={styles.iconCon}>
                <View>
                  <Feather name="shopping-cart" size={24} color="black" />
                </View>

                <View>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>

            <Link
              href={"/screens/searchPage"}
              style={{
                borderWidth: 1,
                borderColor: "lightgray",
                borderRadius: 4,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}
            >
              <Text>Search</Text>
            </Link>

            <FeaturedPosts />

            <View>
              <Text> Category</Text>
            </View>

            <Categories />

            <RecentProducts />
          </View>
        </ScrollView>
      </View>

      <CustomTab />
    </SafeAreaView>
  );
};

export default Home;
