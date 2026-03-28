import { Stack } from "expo-router";

export default function CursoLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Gestão escolar",
                }}
            />
        </Stack>
    )
}