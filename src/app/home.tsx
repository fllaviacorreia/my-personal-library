import Button from "@/components/button";
import Card from "@/components/card";
import Input from "@/components/input";
import { BookType } from "@/context/booksContext";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
    const book1: BookType = {id: "adv12", title:"Titulo 1", authors: "Autores 1", status: "reading"}
    const book2: BookType = {id: "adv22", title:"Titulo 2", authors: "Autores 2", status: "to-read"}
    const book3: BookType = {id: "adv32", title:"Titulo 2", authors: "Autores 2", status: "reading"}
    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 25}}>
            <Text> Home Screen</Text>
            <Input placeholder="Pesquise por título" />
            <Button label="Adicionar livro" size="medium" status="outline" />
            <Card {...book1}/>
            <Card {...book2}/>
            <Link href="/add">
                <Text>Ir para ADD</Text>
            </Link>
        </View>
    )
}