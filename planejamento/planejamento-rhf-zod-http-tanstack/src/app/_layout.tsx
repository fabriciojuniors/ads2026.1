import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { Tabs } from "expo-router";

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "RHF - ZOD",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="format-underlined" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="fetch"
          options={{
            title: "Fetch",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="http" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="axios"
          options={{
            title: "Axios",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="https" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tanstack"
          options={{
            title: "Tanstack",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="query-stats" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cache"
          options={{
            title: "Cache",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="storage" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}
