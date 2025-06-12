import { createContext, useContext, useEffect, useState } from "react"
import { ToastAndroid } from "react-native";
import * as SecureStore from 'expo-secure-store'

export type BookType = {
    id: string,
    title: string,
    authors: string,
    status: 'reading' | 'to-read' | 'read',
}

const BooksContext = createContext<{
    books: BookType[];
    addBook: (book: Omit<BookType, 'id'>) => void;
    deleteBook: (id: string) => void;
    updateStatusBook: (id: string, newStatus: string) => void;
    getBooksBySection: (books: BookType[]) => { title: string; data: BookType[]; }[],
    }> ({
    books: [],
    addBook: () => { },
    deleteBook: () => { },
    updateStatusBook: () => { },
    getBooksBySection: () => []
})


const BooksProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [books, setBooks] = useState<BookType[]>([]);

    const fetchBooks = async () => {
        const dataSecureStore = await SecureStore.getItemAsync('mpl-data');
        const storedBooks: BookType[] = dataSecureStore ? JSON.parse(dataSecureStore) : []
        setBooks(storedBooks);
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const addBook = async (book: Omit<BookType, 'id'>) => {
        const newBook = {
            ...book,
            id: Math.random().toString(36).substring(2, 15)
        }

        const list = books.concat([newBook])

        await SecureStore.setItemAsync('mpl-data', JSON.stringify({list}));
        setBooks(list)
        ToastAndroid.show("Livro cadastrado com sucesso.", ToastAndroid.SHORT)
    }

    const deleteBook = async (id: string) => {
        const list = books.filter((book) => book.id !== id )
        await SecureStore.setItemAsync('mpl-data', JSON.stringify(list));
        setBooks(list)
        ToastAndroid.show("Livro excluido com sucesso.", ToastAndroid.SHORT)
    }
    
    const updateStatusBook = async (id: string, newStatus: string) => {
        const list = books.map(
            (bookP) => bookP.id === id 
            ? {...bookP, status: newStatus as "read" | "reading"} 
            : bookP
        )
        await SecureStore.setItemAsync('mpl-data', JSON.stringify(list));
        setBooks(list)
    }

    const getBooksBySection = (books: BookType[]) => {
        if(!books) return [];

        const sections = [
            {title: "📖 Lendo", data: books.filter(book => book.status === "reading")},
            {title:"✅ Lido", data: books.filter(book => book.status === "read")},
            {title: "📚 Quero ler", data: books.filter(book => book.status === "to-read")}
        ];

        return sections.filter(section => section.data.length > 0)
    }

    return (
    <BooksContext.Provider value={{books, addBook, deleteBook, updateStatusBook, getBooksBySection}}>
        {children}
    </BooksContext.Provider>
    )
}

const useBooks = () => useContext(BooksContext);

export {useBooks, BooksProvider}

