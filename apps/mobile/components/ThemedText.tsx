import { Text, useTheme } from "react-native-paper";
import { ComponentProps } from "react";

export type ThemedTextProps = ComponentProps<typeof Text> & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({ type = "default", ...rest }: ThemedTextProps) {
  const theme = useTheme();

  const getVariant = () => {
    switch (type) {
      case "default":
        return "bodyLarge";
      case "title":
        return "displayLarge";
      case "defaultSemiBold":
        return "titleMedium";
      case "subtitle":
        return "headlineMedium";
      case "link":
        return "bodyLarge";
      default:
        return "bodyLarge";
    }
  };

  const getStyle = () => {
    if (type === "link") {
      return { color: theme.colors.primary };
    }
  };

  return <Text variant={getVariant()} style={getStyle()} {...rest} />;
}
