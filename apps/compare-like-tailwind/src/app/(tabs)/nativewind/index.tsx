import {
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
        pathname: `/(tabs)/nativewind/[id]`,
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
      <TouchableOpacity className="flex-1 m-2 bg-white p-4 rounded-lg shadow-lg">
        <Image
          source={{ uri: item.imageUrl }}
          className="w-full h-40 rounded-lg"
        />
        <Text className="text-lg font-bold my-2">{item.title}</Text>
        <Text className="text-xl font-bold text-black">¥{item.price}</Text>
        <Text className="text-sm text-gray-500">{item.store}</Text>
        <View className="flex-row items-center my-1">
          <Text className="text-sm text-gray-800 mr-2">⭐ {item.rating}</Text>
          <Text className="text-sm text-gray-500">({item.reviews})</Text>
        </View>
        <Text className="text-sm text-gray-500 mt-1">{item.shipping}</Text>
      </TouchableOpacity>
    </Link>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator className="my-5" />;
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
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
}
