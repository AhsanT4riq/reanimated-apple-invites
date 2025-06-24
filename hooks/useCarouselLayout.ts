// CarouselLayout.ts
import { useWindowDimensions } from "react-native";

export function useCarouselLayout() {
  const { width, height } = useWindowDimensions();
  const _itemWidth = width * 0.5;
  const _itemHeight = _itemWidth * 1.6;
  const _spacing = 16;
  const _totalSize = _itemWidth + _spacing;
  return { _itemWidth, _itemHeight, _spacing, _totalSize, width, height };
}
