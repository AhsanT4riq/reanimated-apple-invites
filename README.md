# Apple-Style Invites

A beautiful, interactive invitation interface inspired by Apple's design language, built with React Native Reanimated and Expo. This project showcases smooth animations, gesture handling, and a delightful user experience for browsing and interacting with event invitations.

## Features

- 🍎 Apple-inspired UI/UX with smooth animations
- ✨ Interactive carousel for browsing invitations
- 👆 Intuitive gesture handling with React Native Gesture Handler
- 📱 Responsive design that works on both iOS and Android
- 🎨 Styled with Tailwind CSS using NativeWind
- 🚀 Optimized performance with native animations
- 🌓 Dark mode support

## Demo

[![App Demo GIF](demo/demo.gif)](https://github.com/AhsanT4riq/reanimated-apple-invites/raw/main/demo/demo.mov)

_The GIF above shows a preview of the invitation interface in action. Click on it to view the full demo video (`demo.mov`)._

## Tech Stack

- [Expo](https://expo.dev/) - Development platform
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - For smooth animations
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - For gesture handling
- [NativeWind](https://www.nativewind.dev/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety

## Prerequisites

- Node.js (v16 or later)
- Bun (https://bun.sh/) or npm
- Expo CLI (`bun install -g expo-cli` or `npm install -g expo-cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AhsanT4riq/reanimated-apple-invites.git
   cd reanimated-apple-invites
   ```

2. Install dependencies:

   ```bash
   bun install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   bun expo start
   # or
   npx expo start
   ```

4. Run on your device/emulator:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## Project Structure

```
.
├── src/
│   ├── app/                 # Main application screens and navigation (Expo Router)
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable UI components
│   │   ├── Invites.tsx      # Main invites list component
│   │   ├── InviteItem.tsx   # Individual invite component
│   │   └── ...
│   ├── constants/          # Static data and configurations
│   └── hooks/               # Custom React hooks
│       └── useCarouselLayout.ts  # Carousel layout logic
```

## Available Scripts

- `bun start` - Start the Expo development server
- `bun run android` - Run on Android device/emulator
- `bun run ios` - Run on iOS simulator
- `bun run web` - Run in web browser

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ using Expo and React Native
- Special thanks to the React Native Reanimated team
- Inspired by Apple's design language and interactions
