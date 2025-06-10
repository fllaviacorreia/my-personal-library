import Button from "@/components/button";
import Input from "@/components/input";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 25}}>
            <Text> Home Screen</Text>
            <Input placeholder="Pesquise por título" />
            <Button label="Adicionar livro" size="medium" status="primary" />

            <Link href="/add">
                <Text>Ir para ADD</Text>
            </Link>
        </View>
    )
}