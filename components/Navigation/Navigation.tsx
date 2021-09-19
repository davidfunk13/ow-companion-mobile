import DetailsScreen from "../../screens/Details/Details";
import HomeScreen from "../../screens/Home/Home";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";

const { Navigator, Screen, } = createDrawerNavigator();

const Navigation = () => (
	<NavigationContainer>
		<Navigator screenOptions={{ headerShown: true, }}>
			<Screen name={"Home"} component={HomeScreen} />
			<Screen name={"Details"} component={DetailsScreen} />
		</Navigator>
	</NavigationContainer>
);

export default Navigation;

