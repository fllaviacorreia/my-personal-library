import Input from "@/components/input";
import { BookType, useBooks } from "@/context/booksContext";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from 'formik'
import {Picker} from '@react-native-picker/picker'
import Button from "@/components/button";
import * as yup from 'yup';

export default function Add() {
    const { addBook } = useBooks();
    const router = useRouter();

    const handleAdd = (data: Omit<BookType, 'id'>) => {
        addBook(data);
        router.push('/home');
    }

    const validation = yup.object().shape({
        title: yup.string().min(2, "O título precisa possuir pelo menos 2 caracteres.").required("O título é obrigatório."),
        authors: yup.string().required("O autor é obrigatório."),
        status: yup.string().oneOf(['to-read', 'reading', 'read'], "Selecione uma das opções válidas.").required("O status é obrigatório ."),
    })

    return (
            <Formik
                initialValues={{ title: "", authors: "", status: "" }}
                onSubmit={values => {handleAdd(values as BookType)}}
                validationSchema={validation}
            >
                {({ handleChange, setFieldValue, handleSubmit, values, errors }) =>
                    (
                        <View style={styles.form}>
                            <Input placeholder="Insira o título" value={values.title} onChangeText={handleChange('title')}/>
                            {errors.title && <Text style={{color: "red", fontSize: 16}}>{errors.title}</Text>}

                            <Input placeholder="Insira o(s) autor(es)" value={values.authors} onChangeText={handleChange('authors')}/>
                            {errors.authors && <Text style={{color: "red", fontSize: 16}}>{errors.authors}</Text>}

                            <View style={styles.select}>
                                <Picker
                                    selectedValue={values.status}
                                    onValueChange={(itemValue) => setFieldValue('status', itemValue)}
                                >
                                    <Picker.Item label="Selecione" value="select" enabled={false}/>
                                    <Picker.Item label="Quero ler" value="to-read" />
                                    <Picker.Item label="Lendo" value="reading" />
                                    <Picker.Item label="Lido" value="read" />
                                </Picker>
                            </View>
                            {errors.status && <Text style={{color: "red", fontSize: 16}}>{errors.status}</Text>}

                            <Button label="Salvar" status="secondary" size="medium" onPress={() => handleSubmit()}/>
                        </View>
                    )}
            </Formik>
    )
}

const styles = StyleSheet.create({
    form:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: "100%",
        alignItems: 'center',
        gap: 15,
    },
    select: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: "#d9d9d9",
        marginVertical: 10,
        width: "100%",
        borderRadius: 15
    }
})