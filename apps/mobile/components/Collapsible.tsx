import { List } from "react-native-paper";
import { PropsWithChildren } from "react";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  return <List.Accordion title={title}>{children}</List.Accordion>;
}
