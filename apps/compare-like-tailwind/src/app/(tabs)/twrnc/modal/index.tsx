import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ItemDetailModalScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Text>hoge</Text>
      <TouchableOpacity
        style={{ margin: 10, borderColor: "#000" }}
        onPress={() => router.push("/(tabs)/twrnc/modal/nextView")}
      >
        <Text>次の画面</Text>
      </TouchableOpacity>
    </View>
  );
}
