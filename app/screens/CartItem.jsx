import { View, Text, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../../constants/styles";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartItem = ({ item, dataSet, setDataSet }) => {
  const [isChecked, setChecked] = useState(false);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(item?.price);

  const handleQty = (sign) => {
    switch (sign) {
      case "+":
        setQty((previsIncreased) => previsIncreased + 1);
        break;

      case "-":
        if (qty > 1) {
          setQty((previsDecreased) => previsDecreased - 1);
        }

      default:
        break;
    }
  };

  useEffect(() => {
    setPrice(item?.price * qty);
  }, [qty]);

  const handleDelete = () => {
    setDataSet(dataSet.filter((product) => product.id !== item.id));
  };

  return (
    <View style={styles.checkCon}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#3CB043" : undefined}
      />
      <View style={styles.imgcartCon}>
        <Image source={item.img} style={{ height: "100%", width: "100%" }} />
      </View>

      <View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.textCon1}>
            <Text>{item.name}</Text>
            <Text>variant:{item.color}</Text>
          </View>
          <Pressable style={styles.btnQtyCon} onPress={handleDelete}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={20}
              color="gray"
            />
          </Pressable>
        </View>
        <View style={styles.moneyNum}>
          <Text>${price?.toFixed(2)}</Text>
          <Pressable style={styles.btnQtyCon} onPress={() => handleQty("-")}>
            <Text>-</Text>
          </Pressable>
          <Text>{qty}</Text>
          <Pressable style={styles.btnQtyCon} onPress={() => handleQty("+")}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
