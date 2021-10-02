import AddBattletagScreen from "../screens/AddBattletag/AddBattletag";
import AppDrawer from "../components/AppDrawer/AppDrawer";
import HomeScreen from "../screens/Home/Home";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const { Navigator, Screen, } = Drawer;

const Navigation = () => (
	<NavigationContainer >
		<Navigator initialRouteName={"Home"} drawerContent={props => <AppDrawer {...props} />}>
			<Screen name={"Home"} component={HomeScreen} />
			<Screen name={"Add Battletag"} component={AddBattletagScreen} />
		</Navigator>
	</NavigationContainer>
);

export default Navigation;
