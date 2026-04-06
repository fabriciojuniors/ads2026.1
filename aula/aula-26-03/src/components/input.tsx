import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"

import { Controller, useFormContext } from 'react-hook-form'

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

    const contexto = useFormContext()

    return (
        <View style={{ width: '100%', padding: 10, gap: 8 }}>
            <Text> {label} {obrigatorio ? '*' : ''} </Text>
            <Controller
                name={nome}
                control={contexto.control}
                rules={{
                    required: {
                        value: true,
                        message: "O campo é obrigatório"
                    },
                    minLength: {
                        value: 3,
                        message: "O tamanho mínimo é 3"
                    }
                }}
                render={({ field, fieldState }) => (
                    <>
                        <TextInput
                            placeholder={placeholder}
                            editable={editable}
                            keyboardType={keyboardType}
                            onChangeText={field.onChange}
                            value={field.value}
                            style={style.input}
                        />

                        {fieldState.error
                            && <Text>{fieldState.error.message}</Text>}
                    </>
                )}
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