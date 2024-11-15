import { Image, Alert, ScrollView, Text, View, FlatList } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { generateData } from "@/src/utils";
import { useEffect } from "react";
import { ItemCard } from "@/src/components/ItemCardNativeWind";
import tw from "twrnc"; // twrnc をインポート
import { MotiView } from "moti";

export default function ItemDetailModalNextScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>hoge</Text>
    </View>
  );
}
