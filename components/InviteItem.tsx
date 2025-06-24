import { useCarouselLayout } from "@/hooks/useCarouselLayout";
import { Image, ImageSourcePropType } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface InviteItemProps {
  image: ImageSourcePropType;
  index: number;
  offset: SharedValue<number>;
  totalImages: number;
}

export default function InviteItem({
  image,
  index,
  offset,
  totalImages,
}: InviteItemProps) {
  const { _itemWidth, _itemHeight, _totalSize, width } = useCarouselLayout();

  const animatedRotate = useAnimatedStyle(() => {
    const itemPosition = index * _totalSize - width - _totalSize / 2;
    const totalSize = totalImages * _totalSize;

    const range =
      ((itemPosition - offset.value) % totalSize) + width + _totalSize / 2;
    const rotate = interpolate(
      range,
      [-_totalSize, (width - _totalSize) / 2, width],
      [-5, 0, 5]
    );

    const translateY = interpolate(
      range,
      [-_totalSize, (width - _totalSize) / 2, width],
      [10, -5, 10]
    );

    return {
      transform: [{ rotate: `${rotate}deg` }, { translateY }],
    };
  });

  return (
    <Animated.View
      style={[
        animatedRotate,
        {
          width: _itemWidth,
          height: _itemHeight,
          borderRadius: 20,
          overflow: "hidden",
        },
      ]}
    >
      <Image
        source={image}
        style={{ flex: 1, resizeMode: "cover" }}
        className="w-full h-full"
      />
    </Animated.View>
  );
}
