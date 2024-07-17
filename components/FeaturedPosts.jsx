import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const FeaturedPosts = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.imgCon1}>
        <Image
          source={require("../assets/img/img1.jpeg")}
          style={styles.img1}
          resizeMode="cover"
        />

        <Image
          source={require("../assets/img/img2.png")}
          style={styles.img1}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default FeaturedPosts;
