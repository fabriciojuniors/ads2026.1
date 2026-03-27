import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"

interface InputProps {
    nome: string
    label: string
    placeholder?: string
    obrigatorio?: boolean
    editable?: boolean
    keyboardType: KeyboardTypeOptions
    onChange?: (valor: string) => void
}

export const Input = ({ nome,
    label,
    placeholder,
    obrigatorio = true,
    editable = true,
    keyboardType,
    onChange, }: InputProps) => {

    return (
        <View style={{width: '100%', padding: 10, gap: 8}}>
            <Text> {label} {obrigatorio ? '*' : ''} </Text>
            <TextInput
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                onChangeText={onChange}
                style={style.input}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        padding: 8,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        borderColor: '#d8d8d8',
        borderWidth: 1,
    }
})