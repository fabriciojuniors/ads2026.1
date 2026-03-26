import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CursosLayout() {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ paddingTop: top, backgroundColor: 'red' }}>
            <View>
                <Text>Cabeçalho</Text>
            </View>
        </View>
    )
}