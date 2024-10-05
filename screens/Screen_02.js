import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen_02 = () => {
  const [data, setData] = useState([
    { key: "1", type: "Vegetable", name: "Apple", price: "28.00", image: require("../assets/Data/Image_101.png") },
    { key: "2", type: "Vegetable", name: "Pear", price: "28.00", image: require("../assets/Data/Image_102.png") },
    { key: "3", type: "Vegetable", name: "Coconut", price: "28.00", image: require("../assets/Data/Image_103.png") },
    { key: "4", type: "Vegetable", name: "Pear", price: "28.00", image: require("../assets/Data/Image_105.png") },
    { key: "5", type: "Vegetable", name: "Coconut", price: "28.00", image: require("../assets/Data/Image_106.png") },
    { key: "6", type: "Vegetable", name: "Coconut", price: "28.00", image: require("../assets/Data/Image_105.png") },
    { key: "7", type: "Vegetable", name: "Pear", price: "28.00", image: require("../assets/Data/Image_105.png") },
    { key: "8", type: "Seafood", name: "Seafood 1", price: "28.00", image: require("../assets/Data/Image_95.png") },
    { key: "9", type: "Seafood", name: "Seafood 2", price: "28.00", image: require("../assets/Data/Image_95.png") },
    { key: "10", type: "Seafood", name: "Seafood 3", price: "28.00", image: require("../assets/Data/Image_95.png") },
    { key: "11", type: "Seafood", name: "Seafood 4", price: "28.00", image: require("../assets/Data/Image_95.png") },
    { key: "12", type: "Seafood", name: "Seafood 5", price: "28.00", image: require("../assets/Data/Image_95.png") },
    { key: "13", type: "Drink", name: "Drink 1", price: "28.00", image: require("../assets/Data/Image_96.png") },
    { key: "14", type: "Drink", name: "Drink 2", price: "28.00", image: require("../assets/Data/Image_96.png") },
    { key: "15", type: "Drink", name: "Drink 3", price: "28.00", image: require("../assets/Data/Image_96.png") },
    { key: "16", type: "Drink", name: "Drink 4", price: "28.00", image: require("../assets/Data/Image_96.png") },
    { key: "17", type: "Drink", name: "Drink 5", price: "28.00", image: require("../assets/Data/Image_96.png") },
    { key: "18", type: "Drink", name: "Drink 6", price: "28.00", image: require("../assets/Data/Image_96.png") },
  ]);

  const navigation = useNavigation();

  const [type, setType] = useState("Vegetable");
  const [searchQuery, setSearchQuery] = useState("");
  const [initialItemCount, setInitialItemCount] = useState(6);
  const filteredData = data.filter(
    (item) => item.type === type && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen_01");
          }}
        >
          <Image source={require("../assets/Data/Image_183.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen_03");
          }}
        >
          <Image source={require("../assets/Data/Image_182.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: type === "Vegetable" ? "green" : "white" }]}
          onPress={() => {
            setType("Vegetable");
            setInitialItemCount(6);
          }}
        >
          <Text style={styles.categoryText}>Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: type === "Seafood" ? "green" : "white" }]}
          onPress={() => {
            setType("Seafood");
            setInitialItemCount(6);
          }}
        >
          <Text style={styles.categoryText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: type === "Drink" ? "green" : "white" }]}
          onPress={() => {
            setType("Drink");
            setInitialItemCount(6);
          }}
        >
          <Text style={styles.categoryText}>Drinks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orderHeader}>
        <Text style={styles.orderTitle}>Order your favorite</Text>
        <TouchableOpacity onPress={() => setInitialItemCount(filteredData.length)}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData.slice(0, initialItemCount)}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Screen_03");
              }}
            >
              <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.key}
      />
    </ScrollView>
  );
};

export default Screen_02;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  icon: {
    width: 25,
    height: 25,
  },
  searchContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    width: "90%",
    height: 50,
    paddingLeft: 20,
    fontSize: 28,
  },
  categoryContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  orderTitle: {
    fontSize: 25,
    color: "green",
  },
  seeAllText: {
    fontSize: 25,
    color: "pink",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    marginHorizontal: "2.5%",
    marginVertical: 10,
    padding: 15,
  },
  itemImage: {
    width: 150,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
