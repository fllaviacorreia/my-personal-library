import Button from "@/components/button";
import Card from "@/components/card";
import Input from "@/components/input";
import { useBooks } from "@/context/booksContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    const router = useRouter();

    const { books, getBooksBySection } = useBooks();

    const [titleOfBook, setTitleOfBook] = useState("");

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(titleOfBook.toLocaleLowerCase()))

    const sections = getBooksBySection(filteredBooks);

    const handleGoAddBookScreen = () => {
        router.push("/add")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Input
                    placeholder="Pesquise por título"
                    value={titleOfBook}
                    onChangeText={(value) => setTitleOfBook(value)} 
                />
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.titleScreen}>Meus Livros</Text>
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Card {...item} />}
                    ListEmptyComponent={<Text style={{ color: "orange" }}>Nenhum livro encontrado</Text>}
                    renderSectionHeader={({ section: { title } }) => (<Text style={styles.titleSection}>{title}</Text>)}
                />
            </View>
            <View style={styles.footerContainer}>
                <Button label="Adicionar livro" size="medium" status="primary" onPress={() => handleGoAddBookScreen()} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        gap: 25,
        paddingVertical: 15,
        backgroundColor: '#F0FDEC'
    },
    search: { width: "100%", marginVertical: 10 },
    listContainer: { height: "80%", gap: 25, width: "100%", },
    footerContainer: { width: "100%", alignItems: 'center' },
    titleScreen: { fontSize: 20, fontWeight: '900' },
    titleSection: { fontSize: 16, fontWeight: "bold" }
})