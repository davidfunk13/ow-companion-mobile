import * as eva from "@eva-design/eva";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import React from "react";
import { ApplicationProvider, Divider, Drawer, DrawerItem, Icon, IconRegistry, Layout, Text, } from "@ui-kitten/components";
import { ImageBackground, StyleSheet, } from "react-native";
import AppDrawer from "./navigation/AppDrawer/AppDrawer";

const App = () => {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			< ApplicationProvider {...eva} theme={eva.light} >
				<AppDrawer />
				{/* <HomeScreen /> */}
			</ApplicationProvider >
		</>
	);
};

export default App;
