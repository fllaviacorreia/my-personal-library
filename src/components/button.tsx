import { Dimensions, Pressable, PressableProps, StyleSheet, Text } from "react-native";

export type ButtonPros = PressableProps & {
    label: string,
    status: "primary" | "secondary" | "danger" | "outline",
    size: "small" | "medium" | "full",
}

const backgroundMap: Record<string, {}> = {
    primary: { backgroundColor: "#4da641" },
    secondary: { backgroundColor: "#3092ab" },
    danger: { backgroundColor: "#b82222" },
    outline: { backgroundColor: "transparent", borderWidth: 2, borderColor: "#4da641" },
}

const screenWidth = Dimensions.get('window').width

const widthMap: Record<string, {}> = {
    small: { width: screenWidth * 0.3, height: 32 },
    medium: { width: screenWidth * 0.5, height: 36 },
    full: { width: "100%", height: 42 },
}

export default function Button({ label, status, size, ...rest }: ButtonPros) {
    const dimension = widthMap[size];
    const backgroundColor = backgroundMap[status];
    const textColor = status == 'outline' ? "#000" : "#FFF";

    return (
        <Pressable style={{...styles.button, ...dimension, ...backgroundColor}} {...rest}>
            <Text style={{...styles.text, color: textColor}}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17
    }
})