import {
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  Text,
  View,
  FlatList,
} from "react-native";

import { useLocalSearchParams, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { generateData } from "@/src/utils";
import { useEffect } from "react";
import { ItemCard } from "@/src/components/ItemCard";

export default function ItemDetailScreen() {
  const {
    id = "",
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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl as string }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>¥{price.toLocaleString()}</Text>
      <Text style={styles.store}>販売元: {store}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>評価:</Text>
        <Text style={styles.value}>{rating} ⭐</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>レビュー:</Text>
        <Text style={styles.value}>{reviews}件のレビュー</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>送料:</Text>
        <Text style={styles.value}>{shipping}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>カテゴリ:</Text>
        <Text style={styles.value}>家電・カメラ</Text>
        {/* ここはダミーデータです */}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>在庫状況:</Text>
        <Text style={styles.value}>在庫あり</Text>
        {/* ここもダミーデータです */}
      </View>

      <Text style={styles.description}>
        こちらの商品は最新モデルで、非常に高性能な機能を備えています。家電カテゴリの中でも特に人気の高い商品です。あなたの生活をより豊かにする一品です。
      </Text>

      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>今すぐ購入</Text>
      </TouchableOpacity>

      <Text style={styles.relatedTitle}>関連商品</Text>

      <FlatList
        data={relatedItems}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.relatedList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
  },
  store: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  value: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  buyButton: {
    backgroundColor: "#ff6347", // トマト色のボタン
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  relatedTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#333",
  },
  relatedList: {
    paddingBottom: 20,
  },
});
