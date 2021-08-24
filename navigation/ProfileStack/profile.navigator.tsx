import { AppRoute, } from "../app-routes";
import { ProfileScreen, } from "../../screens/profile";
import { ProfileTabNavigationProp, } from "../AppStack/AppStack";
import React from "react";
import { CompositeNavigationProp, RouteProp, } from "@react-navigation/core";
import { StackNavigationProp, createStackNavigator, } from "@react-navigation/stack";

type ProfileNavigatorParams = {
  [AppRoute.PROFILE]: undefined;
}

export interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    ProfileTabNavigationProp,
    StackNavigationProp<ProfileNavigatorParams, AppRoute.PROFILE>>;
  route: RouteProp<ProfileNavigatorParams, AppRoute.PROFILE>;
}

const Stack = createStackNavigator<ProfileNavigatorParams>();

export const ProfileNavigator = (): React.ReactElement => (
	<Stack.Navigator screenOptions={{ headerShown: false, }}>
		<Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen}/>
	</Stack.Navigator>
);
