import {
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import React from "react";
import { Link } from "expo-router";
import { generateData, ItemData } from "@/src/utils";

export default function TabThreeScreen() {
  const [listData, setListData] = useState(generateData().slice(0, 20));
  const [loading, setLoading] = useState(false);

  const fetchMoreData = (
    setListData: React.Dispatch<React.SetStateAction<ItemData[]>>
  ) => {
    const newData = generateData().slice(0, 20);
    setListData((prevData) => [...prevData, ...newData]);
  };

  const loadMore = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        fetchMoreData(setListData);
        setLoading(false);
      }, 1000); // Simulate network request
    }
  };

  const renderItem = ({ item }: { item: ItemData }) => (
    <Link
      href={{
        pathname: `/(tabs)/native/[id]`,
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
      }}
      asChild
    >
      <TouchableOpacity style={styles.cardContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardPrice}>¥{item.price}</Text>
        <Text style={styles.cardStore}>{item.store}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.cardRating}>⭐ {item.rating}</Text>
          <Text style={styles.cardReviews}>({item.reviews})</Text>
        </View>
        <Text style={styles.cardShipping}>{item.shipping}</Text>
      </TouchableOpacity>
    </Link>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={styles.loadingIndicator} />;
  };

  return (
    <FlatList
      data={listData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  cardPrice: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  cardStore: {
    fontSize: 14,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  cardRating: {
    fontSize: 14,
    marginRight: 5,
  },
  cardReviews: {
    fontSize: 14,
    color: "#666",
  },
  cardShipping: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  loadingIndicator: {
    marginVertical: 20,
  },
});
