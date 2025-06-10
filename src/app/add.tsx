import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Add() {
    return (
        <View>
            <Text> Add Screen</Text>
            <Link href="/home">
                <Text>Ir para Home</Text>
            </Link>
        </View>
    )
}