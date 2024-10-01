import { Image, Alert, ScrollView, Text, View, FlatList } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { generateData } from "@/src/utils";
import { useEffect } from "react";
import { ItemCard } from "@/src/components/ItemCardNativeWind";

export default function ItemDetailScreen() {
  const {
    title = "",
    price = 0,
    imageUrl = "",
    store = "",
    rating = 0,
    reviews = 0,
    shipping = "",
  } = useLocalSearchParams();
  const navigation = useNavigation();

  const handleBuyNow = () => {
    Alert.alert("購入確認", "商品を購入しますか？", [
      { text: "キャンセル", style: "cancel" },
      { text: "購入する", onPress: () => console.log("商品購入!") },
    ]);
  };

  const relatedItems = generateData(6);

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title, navigation]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="p-5 bg-white"
    >
      <Image
        source={{ uri: imageUrl as string }}
        className="w-full h-80 rounded-lg mb-5"
      />
      <Text className="text-2xl font-bold mb-2">{title}</Text>
      <Text className="text-xl text-black mb-2">¥{price.toLocaleString()}</Text>
      <Text className="text-lg text-gray-500 mb-5">販売元: {store}</Text>

      <View className="flex-row mb-2">
        <Text className="text-lg font-bold mr-2">評価:</Text>
        <Text className="text-lg">{rating} ⭐</Text>
      </View>

      <View className="flex-row mb-2">
        <Text className="text-lg font-bold mr-2">レビュー:</Text>
        <Text className="text-lg">{reviews}件のレビュー</Text>
      </View>

      <View className="flex-row mb-2">
        <Text className="text-lg font-bold mr-2">送料:</Text>
        <Text className="text-lg">{shipping}</Text>
      </View>

      <View className="flex-row mb-2">
        <Text className="text-lg font-bold mr-2">カテゴリ:</Text>
        <Text className="text-lg">家電・カメラ</Text>
      </View>

      <View className="flex-row mb-2">
        <Text className="text-lg font-bold mr-2">在庫状況:</Text>
        <Text className="text-lg">在庫あり</Text>
      </View>

      <Text className="text-lg text-gray-800 mb-5">
        こちらの商品は最新モデルで、非常に高性能な機能を備えています。家電カテゴリの中でも特に人気の高い商品です。あなたの生活をより豊かにする一品です。
      </Text>

      <TouchableOpacity
        className="bg-red-500 p-4 rounded-lg items-center mt-5"
        onPress={handleBuyNow}
      >
        <Text className="text-lg text-white font-bold">今すぐ購入</Text>
      </TouchableOpacity>

      <Text className="text-xl font-bold mt-8 mb-5 text-gray-800">
        関連商品
      </Text>

      <FlatList
        data={relatedItems}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScrollView>
  );
}
