import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ItemData } from "../utils";
import tw from "twrnc";

export const ItemCard: React.FC<{ item: ItemData }> = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: `/(tabs)/twrnc/[id]`,
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
      style={tw`w-36 mr-2 bg-white p-3 rounded-lg shadow-lg`}
      onPress={handlePress}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={tw`w-full h-24 rounded-lg`}
      />
      <Text style={tw`text-sm font-bold my-1 text-gray-800`}>{item.title}</Text>
      <Text style={tw`text-lg font-bold text-black`}>
        ¥{item.price.toLocaleString()}
      </Text>
      <Text style={tw`text-xs text-gray-500`}>{item.store}</Text>
      <View style={tw`flex-row items-center my-1`}>
        <Text style={tw`text-xs text-gray-800 mr-1`}>⭐ {item.rating}</Text>
        <Text style={tw`text-xs text-gray-500`}>({item.reviews})</Text>
      </View>
      <Text style={tw`text-xs text-gray-500 mt-1`}>{item.shipping}</Text>
    </TouchableOpacity>
  );
};
