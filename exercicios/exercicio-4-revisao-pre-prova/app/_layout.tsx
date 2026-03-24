import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="destinos"
        options={{
          title: 'Destinos',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="map-marker-outline" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ size, color }) => <EvilIcons name="gear" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
