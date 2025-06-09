import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
    return (
        <View>
            <Text> Home Screen</Text>
            <Link href="/add">
                <Text>Ir para ADD</Text>
            </Link>
        </View>
    )
}