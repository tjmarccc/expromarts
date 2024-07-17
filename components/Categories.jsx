import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Categories = () => {
  return (
    <View style={styles.categoryCon}>
      <View style={styles.apparelCon}>
        <Image source={require("../assets/img/img3.jpg")} style={styles.img3} />

        <Text style={{ color: "rgba(191, 191, 191, 1)" }}>Apparel</Text>
      </View>

      <View style={styles.schoolCon}>
        <Image source={require("../assets/img/img4.jpg")} style={styles.img3} />

        <Text style={{ color: "rgba(191, 191, 191, 1)" }}>School</Text>
      </View>
      <View style={styles.sportsCon}>
        <Image source={require("../assets/img/img5.jpg")} style={styles.img3} />

        <Text style={{ color: "rgba(191, 191, 191, 1)" }}>Sports</Text>
      </View>
      <View style={styles.electronicsCon}>
        <Image source={require("../assets/img/img6.jpg")} style={styles.img6} />

        <Text style={{ color: "rgba(191, 191, 191, 1)" }}>Electronics</Text>
      </View>
      <View style={styles.apparelCon}>
        <Image source={require("../assets/img/img3.jpg")} style={styles.img3} />

        <Text style={{ color: "rgba(191, 191, 191, 1)" }}>All</Text>
      </View>
    </View>
  );
};

export default Categories;
