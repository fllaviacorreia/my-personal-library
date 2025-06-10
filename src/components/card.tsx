import { BookType, useBooks } from "@/context/booksContext";
import { StyleSheet, Text, View } from "react-native";
import Button from "./button";

export default function Card(data: BookType){
    const {deleteBook, updateStatusBook} = useBooks();

    if(!data) {
        return null;
    }

    const handleDelete = () => {
        deleteBook(data.id);
    }

    const handleUpdate = () => {
        const newStatus = data.status === "read" || data.status === "to-read" ? "reading" : "read";
        updateStatusBook(data.id, newStatus);
    }

    const statusAndLabel = data.status === "reading"
        ? {label: "Mudar para lido", status: "secondary"} 
        : {label: "Mudar para lendo", status: "primary"};

    return (
        <View id={data.id} style={styles.card}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.text}>{data.authors}</Text>
            <Button 
                label="Excluir" 
                size="medium" 
                status="danger" 
                onPress={handleDelete}
            />
            <Button 
                label={statusAndLabel.label} 
                size="medium" 
                status={statusAndLabel.status as "primary" | "secondary"} 
                onPress={handleUpdate}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 20,
        borderRadius: 25,
        marginVertical: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        color: "#777",
    }
})