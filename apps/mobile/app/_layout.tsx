import {
  DarkTheme as NavDark,
  DefaultTheme as NavLight,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "react-native";
import { configureApiClient } from "@elepad/api-client/src/runtime";
import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDark,
  MD3LightTheme as PaperLight,
  adaptNavigationTheme,
} from "react-native-paper";
import SpaceMono from "@/assets/fonts/SpaceMono-Regular.ttf";

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({ SpaceMono });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  configureApiClient({
    // TODO: read from a config.ts file, and make that file read from env
    baseUrl: process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8787/api",
    // TODO: add auth only when that is implemented on the backend
    getToken: () => {
      return undefined;
    },
  });

  // 🎨 Elepad brand colors (you can tweak to your palette)
  const brand = {
    primary: "rgb(0,108,247)",
    secondary: "rgb(0,170,142)",
  };

  // Paper themes with brand colors
  const paperLight = {
    ...PaperLight,
    colors: {
      ...PaperLight.colors,
      primary: brand.primary,
      secondary: brand.secondary,
    },
  };
  const paperDark = {
    ...PaperDark,
    colors: {
      ...PaperDark.colors,
      primary: brand.primary,
      secondary: brand.secondary,
    },
  };

  // Sync React Navigation theme with Paper
  const { LightTheme: AdaptedNavLight, DarkTheme: AdaptedNavDark } =
    adaptNavigationTheme({
      reactNavigationLight: NavLight,
      reactNavigationDark: NavDark,
    });

  const paperTheme = colorScheme === "dark" ? paperDark : paperLight;
  const navTheme = colorScheme === "dark" ? AdaptedNavDark : AdaptedNavLight;

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <NavigationThemeProvider value={navTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </NavigationThemeProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
