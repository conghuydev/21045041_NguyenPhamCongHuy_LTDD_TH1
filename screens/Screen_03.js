import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen_03 = () => {
  const [data, setData] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: "28.00",
      image: require("../assets/Data/Image_101.png"),
      quantity: 1,
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("../assets/Data/Image_102.png"),
      quantity: 2,
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("../assets/Data/Image_103.png"),
      quantity: 3,
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("../assets/Data/Image_105.png"),
      quantity: 1,
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("../assets/Data/Image_106.png"),
      quantity: 1,
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("../assets/Data/Image_107.png"),
      quantity: 4,
    },
    {
      key: "7",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("../assets/Data/Image_105.png"),
      quantity: 1,
    },
    {
      key: "8",
      type: "Seafood",
      name: "Seafood 1",
      price: "28.00",
      image: require("../assets/Data/Image_95.png"),
      quantity: 1,
    },
    {
      key: "9",
      type: "Seafood",
      name: "Seafood 2",
      price: "28.00",
      image: require("../assets/Data/Image_95.png"),
      quantity: 1,
    },
    {
      key: "10",
      type: "Seafood",
      name: "Seafood 3",
      price: "28.00",
      image: require("../assets/Data/Image_95.png"),
      quantity: 1,
    },
    {
      key: "11",
      type: "Seafood",
      name: "Seafood 4",
      price: "28.00",
      image: require("../assets/Data/Image_95.png"),
      quantity: 1,
    },
    {
      key: "12",
      type: "Seafood",
      name: "Seafood 5",
      price: "28.00",
      image: require("../assets/Data/Image_95.png"),
      quantity: 1,
    },
    {
      key: "13",
      type: "Drink",
      name: "Drink 1",
      price: "28.00",
      image: require("../assets/Data/Image_96.png"),
      quantity: 1,
    },
    {
      key: "14",
      type: "Drink",
      name: "Drink 2",
      price: "28.00",
      image: require("../assets/Data/Image_96.png"),
      quantity: 1,
    },
    {
      key: "15",
      type: "Drink",
      name: "Drink 3",
      price: "28.00",
      image: require("../assets/Data/Image_96.png"),
      quantity: 1,
    },
    {
      key: "16",
      type: "Drink",
      name: "Drink 4",
      price: "28.00",
      image: require("../assets/Data/Image_96.png"),
      quantity: 1,
    },
    {
      key: "17",
      type: "Drink",
      name: "Drink 5",
      price: "28.00",
      image: require("../assets/Data/Image_96.png"),
      quantity: 1,
    },
    {
      key: "18",
      type: "Drink",
      name: "Drink 6",
      price: "28.00",
      image: require("../assets/Data/Image_96.png"),
      quantity: 1,
    },
  ]);
  const navigation = useNavigation();
  const [type, setType] = useState("Vegetable");

  const calculateToTal = () => {
    return data
      .filter((item) => item.type === type)
      .reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  const updateQuantity = (key, delta) => {
    setData((prevDate) =>
      prevDate.map((item) => (item.key === key ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item))
    );
  };
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sreen_02");
          }}
        >
          <Image source={require("../assets/Data/Image_183.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>My Basket</Text>

        <FlatList
          data={data.filter((item) => item.type === type)}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
              <View>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemName}>{item.itemName}</Text>
                <View style={styles.ratingContainer}>
                  {[...Array(5)].map((_, index) => (
                    <Image key={index} source={require("../assets/Data/Image_180.png")} style={styles.starImage} />
                  ))}
                </View>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.key, -1)}>
                  <Image source={require("../assets/Data/Image_176.png")} style={styles.quantityButton} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.key, 1)}>
                  <Image source={require("../assets/Data/Image_175.png")} style={styles.quantityButton} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>${calculateToTal()}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Screen_02");
            }}
          >
            <Text>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen_03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 25,
    color: "green",
    fontWeight: "bold",
    marginVertical: 20,
  },
  itemContainer: {
    width: "100%",
    marginHorizontal: "2.5%",
    padding: 15,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
  itemName: {
    fontSize: 18,
    color: "silver",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  starImage: {
    width: 15,
    height: 15,
    marginTop: 10,
  },
  quantityContainer: {
    marginLeft: 140,
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 15,
    height: 15,
  },
  quantityText: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  totalContainer: {
    width: "100%",
    justifyContent: "center",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginVertical: 10,
  },
  totalText: {
    fontSize: 30,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 40,
    width: 240,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 90,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
