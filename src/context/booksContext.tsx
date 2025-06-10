import { createContext, useContext, useState } from "react"
import { ToastAndroid } from "react-native";

type StatusBook = { status: 'reading' | 'to-read' | 'read' }

type BookType = {
    id: string,
    title: string,
    authors: string,
    status: StatusBook,
}

const BooksContext = createContext<{
    books: BookType[];
    addBook: (book: Omit<BookType, 'id'>) => void;
    deleteBook: (id: string) => void;
    updateStatusBook: (id: string, newStatus: StatusBook) => void;
    }> ({
    books: [],
    addBook: () => { },
    deleteBook: () => { },
    updateStatusBook: () => { }
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
    
    const updateStatusBook = (id: string, newStatus: StatusBook) => {
        setBooks((prevBooks) => prevBooks.map((bookP) => bookP.id === id ? {...bookP, status: newStatus} : bookP))
    }

    return <BooksContext.Provider value={{books, addBook, deleteBook, updateStatusBook}}>
        {children}
    </BooksContext.Provider>
}

const useBooks = () => useContext(BooksContext);

export {useBooks, BooksProvider}

