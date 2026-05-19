import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: 'white',
        tabBarActiveTintColor: 'cadetblue',
        headerStyle: { backgroundColor: 'cadetblue' }
      }}
    >
      <Tabs.Screen
        name="camera"
        options={{
          tabBarLabel: 'Câmera',
          headerTitle: 'Câmera',
          tabBarIcon: ({ color, size }) => <Ionicons name="camera-outline" size={size} color={color} />
        }}
      />

      <Tabs.Protected guard={true}>
        <Tabs.Screen
          name="localizacao"
          options={{
            tabBarLabel: 'Localização',
            headerTitle: 'Localização',
            tabBarIcon: ({ color, size }) => <Ionicons name="location-outline" size={size} color={color} />
          }}
        />
      </Tabs.Protected>

    </Tabs>
  )
}
