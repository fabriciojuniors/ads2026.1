import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="gestao"
        options={{
          title: "Gestão Escolar",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-school" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen
        name="cardapio"
        options={{
          title: "Cardápio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}
