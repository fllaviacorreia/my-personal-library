import { BooksProvider } from '@/context/booksContext'
import { Stack } from 'expo-router'

export default function Layout() {
    return (
        <BooksProvider>
            <Stack initialRouteName='home'>
                <Stack.Screen
                    name='home'
                    options={{ title: "Estante Virtual", headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name='add'
                    options={{ title: "Novo Livro", headerTitleAlign: 'center' }}
                />
            </Stack>
        </BooksProvider>
    )
}