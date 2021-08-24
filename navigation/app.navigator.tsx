import { AppRoute, } from "./app-routes";
import { AuthNavigator, } from "./auth.navigator";
import { HomeNavigator, } from "./home.navigator";
import React from "react";
import { createStackNavigator, } from "@react-navigation/stack";

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
}

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (props: Partial<StackNavigatorProps>): React.ReactElement => (
	<Stack.Navigator {...props}
		screenOptions={{ headerShown: true, }}
	>
		<Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
		<Stack.Screen name={AppRoute.HOME} component={HomeNavigator}/>
	</Stack.Navigator>
);
