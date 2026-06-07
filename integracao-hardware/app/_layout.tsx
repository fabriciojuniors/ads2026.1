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
        name="index"
        options={{ href: null }}
      />

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

      <Tabs.Screen
        name="audio"
        options={{
          tabBarLabel: 'Áudio',
          headerTitle: 'Gravador de Áudio',
          tabBarIcon: ({ color, size }) => <Ionicons name="mic-outline" size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name="sensors"
        options={{
          tabBarLabel: 'Sensores',
          headerTitle: 'Sensores de Movimento',
          tabBarIcon: ({ color, size }) => <Ionicons name="fitness-outline" size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name="auth"
        options={{
          tabBarLabel: 'Autenticação',
          headerTitle: 'Autenticação Biométrica',
          tabBarIcon: ({ color, size }) => <Ionicons name="finger-print-outline" size={size} color={color} />
        }}
      />

    </Tabs>
  )
}
