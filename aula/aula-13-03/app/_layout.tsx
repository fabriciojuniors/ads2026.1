import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='cursos'
        options={{
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="alunos"
        options={{
          headerTitle: "Cadastro de alunos",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home"
              color={color}
            />
          },
          headerRight: () => {
            return <Text>Direita</Text>
          },
          headerLeft: () => {
            return <Text>Esquerda</Text>
          },
          // presentation: "containedModal",
          // headerLargeTitleEnabled: true,
          headerStyle: { backgroundColor: 'red' },
          tabBarLabel: "Alunos",
          tabBarBadge: "9+",


        }}
      />
    </Tabs>
  )

}