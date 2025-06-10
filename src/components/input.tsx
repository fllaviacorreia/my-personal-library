import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input({placeholder, ...rest}: TextInputProps) {
    return(
        <TextInput placeholder={placeholder} style={styles.input} {...rest}/>
    )
}

const styles = StyleSheet.create({
    input: {
         height: 40,
         fontSize: 18,
         backgroundColor: "#D9D9D9",
         color: "#000",
         paddingHorizontal: 10,
         marginVertical: 10,
         borderRadius: 15,
         width: "100%"
    }
})