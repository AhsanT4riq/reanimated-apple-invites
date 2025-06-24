import Invites from "@/components/Invites";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Invites />
    </GestureHandlerRootView>
  );
}
