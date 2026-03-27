import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface BotaoProps {
    label: string,
    onPress: () => void
}

export const Botao = ({ label, onPress }: BotaoProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style.botao}
        >
            <Text style={style.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    botao: {
        padding: 10,
        backgroundColor: 'purple',
        borderWidth: 1,
        borderColor: 'darkblue',
        borderRadius: 5
    },
    label: {
        color: 'white'
    }
})