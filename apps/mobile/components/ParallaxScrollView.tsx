// components/ParallaxScrollView.tsx
import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, type ViewStyle } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { Surface } from "react-native-paper";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle<ViewStyle>(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
      [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
    );

    const scale = interpolate(
      scrollOffset.value,
      [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
      [2, 1, 1],
    );

    // Help TS infer the exact transform shape
    const transform = [{ translateY }, { scale }] as const;

    return {
      // Cast just the transform to the expected RN type
      transform: transform as unknown as ViewStyle["transform"],
    };
  });

  return (
    <Surface style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor.light },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>

        <Surface style={styles.content}>{children}</Surface>
      </Animated.ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
