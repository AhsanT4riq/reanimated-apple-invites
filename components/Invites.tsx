import { useCarouselLayout } from "@/hooks/useCarouselLayout";
import { Marquee } from "@animatereactnative/marquee";
import { Stagger } from "@animatereactnative/stagger";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from "react-native-reanimated";
import InviteItem from "./InviteItem";

// Images array
const images = [
  {
    id: 1,
    source:
      "https://images.unsplash.com/photo-1750131701279-98386ecece0b?q=80&w=687",
  },
  {
    id: 2,
    source:
      "https://images.unsplash.com/photo-1747134393162-f1605d8cb9c0?q=80&w=687",
  },
  {
    id: 3,
    source:
      "https://images.unsplash.com/photo-1749894303526-5044b9242f76?q=80&w=683",
  },
  {
    id: 4,
    source:
      "https://images.unsplash.com/photo-1750000650631-377517048712?q=80&w=687",
  },
  {
    id: 5,
    source:
      "https://images.unsplash.com/photo-1749656342578-adc1618381c3?q=80&w=687",
  },
  {
    id: 6,
    source:
      "https://images.unsplash.com/photo-1715904399522-6b82d02c09a0?q=80&w=764",
  },
  {
    id: 7,
    source:
      "https://images.unsplash.com/photo-1744029503364-bdac33432c8d?q=80&w=687",
  },
  {
    id: 8,
    source:
      "https://images.unsplash.com/photo-1714052326822-9f57a1d0ec9d?q=80&w=686",
  },
];

export default function Invites() {
  const offset = useSharedValue(0);
  const [activeImage, setActiveImage] = useState(0);
  const { _spacing, _totalSize, width, height } = useCarouselLayout();

  useAnimatedReaction(
    () => {
      const itemCenter = width / 2;
      const value = ((offset.value + itemCenter) / _totalSize) % images.length;
      return Math.abs(Math.floor(value));
    },
    (value) => {
      if (value !== activeImage) {
        runOnJS(setActiveImage)(value);
      }
    }
  );

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View style={[StyleSheet.absoluteFillObject, { opacity: 0.5 }]}>
        <Animated.Image
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
          key={`image-bg-${images[activeImage].id}`}
          source={{ uri: images[activeImage].source }}
          defaultSource={{ uri: images[activeImage].source }}
          style={{
            width,
            height,
          }}
          blurRadius={20}
        />
      </View>
      <Marquee spacing={_spacing} position={offset}>
        <View className="flex-row" style={{ gap: _spacing }}>
          {images.map((image, index) => (
            <InviteItem
              key={`image-${image.id}`}
              image={{ uri: image.source }}
              index={index}
              offset={offset}
              totalImages={images.length}
            />
          ))}
        </View>
      </Marquee>
      <Stagger
        style={{
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          marginTop: 20,
        }}
        initialEnteringDelay={1000}
        duration={500}
        stagger={500}
      >
        <View className="gap-1 items-center">
          <Text className="font-bold text-lg opacity-50 text-white">
            Welcome to
          </Text>
          <Text className="text-5xl font-bold text-white">Clone Invites</Text>
        </View>
        <Text className="text-lg opacity-50 text-white text-center">
          Create beautiful invitations for all your events. Anyone can receive
          invitations. Sending included with iCloud+.
        </Text>
        <Pressable className="bg-white rounded-full p-4 px-8 mt-10">
          <Text className="font-semibold text-black">Create an Event</Text>
        </Pressable>
      </Stagger>
    </View>
  );
}
