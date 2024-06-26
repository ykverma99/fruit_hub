import { UserProvider } from "@/context/UserContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="screens" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#FFA451" style="light" />
    </UserProvider>
  );
}
