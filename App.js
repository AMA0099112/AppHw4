import React from "react";
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";
import albumData from "./src/json/albums.json";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { FlatList } from "@gluestack-ui/themed";

import Navigation from "./src/navigation";

const App = () => {
  return (
    <SafeAreaView flex={1}>
      <StatusBar />
      <Navigation />
    </SafeAreaView>
  )
}
export default App;