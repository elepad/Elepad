import { openBrowserAsync } from "expo-web-browser";
import { ComponentProps } from "react";
import { Button } from "react-native-paper";

type Props = Omit<ComponentProps<typeof Button>, "onPress"> & {
  href: string;
};

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Button
      {...rest}
      onPress={async () => {
        await openBrowserAsync(href);
      }}
    />
  );
}
