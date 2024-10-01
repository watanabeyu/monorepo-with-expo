import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ItemData } from "../utils";

export const ItemCard: React.FC<{ item: ItemData }> = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
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
    });
  };

  return (
    <TouchableOpacity
      className="w-36 mr-2 bg-white p-3 rounded-lg shadow-lg"
      onPress={handlePress}
    >
      <Image
        source={{ uri: item.imageUrl }}
        className="w-full h-24 rounded-lg"
      />
      <Text className="text-sm font-bold my-1 text-gray-800">{item.title}</Text>
      <Text className="text-lg font-bold text-black">
        ¥{item.price.toLocaleString()}
      </Text>
      <Text className="text-xs text-gray-500">{item.store}</Text>
      <View className="flex-row items-center my-1">
        <Text className="text-xs text-gray-800 mr-1">⭐ {item.rating}</Text>
        <Text className="text-xs text-gray-500">({item.reviews})</Text>
      </View>
      <Text className="text-xs text-gray-500 mt-1">{item.shipping}</Text>
    </TouchableOpacity>
  );
};
