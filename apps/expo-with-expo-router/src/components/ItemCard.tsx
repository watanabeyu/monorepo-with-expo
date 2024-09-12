import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ItemData } from "../utils";

export const ItemCard: React.FC<{ item: ItemData }> = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: `/(tabs)/items/[id]`,
      params: {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        store: item.store,
        rating: item.rating,
        reviews: item.reviews,
        shipping: item.shipping,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>¥{item.price.toLocaleString()}</Text>
      <Text style={styles.cardStore}>{item.store}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.cardRating}>⭐ {item.rating}</Text>
        <Text style={styles.cardReviews}>({item.reviews})</Text>
      </View>
      <Text style={styles.cardShipping}>{item.shipping}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    marginRight: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#333",
  },
  cardPrice: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  cardStore: {
    fontSize: 12,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  cardRating: {
    fontSize: 12,
    marginRight: 5,
    color: "#333",
  },
  cardReviews: {
    fontSize: 12,
    color: "#666",
  },
  cardShipping: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});
