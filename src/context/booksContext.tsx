import { createContext, useContext, useState } from "react"
import { ToastAndroid } from "react-native";

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


    const addBook = (book: Omit<BookType, 'id'>) => {
        const newBook = {
            ...book,
            id: Math.random().toString(36).substring(2, 15)
        }

        setBooks((prevBooks) => [...prevBooks, newBook])
        
        ToastAndroid.show("Livro cadastrado com sucesso.", ToastAndroid.SHORT)
    }

    const deleteBook = (id: string) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id ))
    }
    
    const updateStatusBook = (id: string, newStatus: string) => {
        setBooks((prevBooks) => prevBooks.map((bookP) => bookP.id === id ? {...bookP, status: newStatus as "read" | "reading"} : bookP))
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

