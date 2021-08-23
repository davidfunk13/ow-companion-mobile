
import DetailsScreen from "../../screens/Details/Details";
import DrawerThemingShowcase from "../Drawer/Drawer";
import HomeScreen from "../../screens/Home/Home";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, } from "react-native-safe-area-context";
import { View, } from "react-native";
import { createDrawerNavigator, } from "@react-navigation/drawer";

const { Navigator, Screen, } = createDrawerNavigator();

const AppNavigator = () => (
	<NavigationContainer>
		<Navigator
			screenOptions={{ headerShown: true, }}
			drawerContent={(props) => {
				return (
					<View>
						<SafeAreaView>
							<DrawerThemingShowcase {...props}/>
						</SafeAreaView>
					</View>
				);
			}}
		>
			<Screen name={"Home"} component={HomeScreen} />
			<Screen name={"Details"} component={DetailsScreen} />
		</Navigator>
	</NavigationContainer>
);

export default AppNavigator;

