import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Formulário',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons
              color={color}
              size={size}
              name="dynamic-form"
            />
          }
        }}
      />
      <Tabs.Screen
        name="fetch"
        options={{
          title: 'Fetch',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons
              color={color}
              size={size}
              name="request-page"
            />
          }
        }}
      />
      <Tabs.Screen
        name="cadastro"
        options={{
          title: 'Cadastro de post',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons
              color={color}
              size={size}
              name="add-comment"
            />
          }
        }}
      />
    </Tabs>
  );
}
