import { Controller, useFormContext } from "react-hook-form"
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
    const { control } = useFormContext()

    return (
        <View style={{ width: '100%', padding: 10, gap: 8 }}>
            <Text> {label} {obrigatorio ? '*' : ''} </Text>
            <Controller
                control={control}
                name={nome}
                render={({ field, fieldState }) => (
                    <>
                        <TextInput
                            placeholder={placeholder}
                            editable={editable}
                            keyboardType={keyboardType}
                            style={[style.input, fieldState.error && style.inputError]}
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}

                        />
                        {fieldState.error && (
                            <Text style={style.errorText}>{String(fieldState.error.message)}</Text>
                        )}
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
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -4,
    },
})