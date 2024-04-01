import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import Booklist from "./src/components/Booklist";

const App = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <GluestackUIProvider>
        <StatusBar />
        <Booklist />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;