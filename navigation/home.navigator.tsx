import { AppRoute, } from "./app-routes";
import { ProfileNavigator, } from "./profile.navigator";
import React from "react";
import { TodoNavigator, } from "./todo.navigator";
import { AboutScreen, HomeDrawer, HomeTabBar, } from "../screens/home";
import {
	BottomTabBarProps,
	BottomTabNavigationProp,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp, } from "@react-navigation/core";
import {
	DrawerContentComponentProps,
	DrawerNavigationProp,
	createDrawerNavigator,
} from "@react-navigation/drawer";
import { HomeIcon, InfoIcon, LayoutIcon, PersonIcon, } from "../assets/icons";
import { HomeScreen, } from "../screens/home/home";

type HomeDrawerNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.ABOUT]: undefined;
}

type HomeBottomTabsNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.PROFILE]: undefined;
}

export type TodoTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.TODO>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>>;

export type ProfileTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.PROFILE>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>>;

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export interface HomeScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export type BottomHomeScreenProps = BottomTabBarProps & {
  navigation: TodoTabNavigationProp;
};

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();

const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

// const HomeBottomNavigator = (): React.ReactElement => (
// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 	// @ts-ignore: `tabBar` also contains a DrawerNavigationProp
// 	<BottomTab.Navigator tabBar={HomeTabBar}>
// 		<BottomTab.Screen
// 			name={AppRoute.TODO}
// 			component={TodoNavigator}
// 			options={{
// 				title:      "TODO",
// 				tabBarIcon: LayoutIcon, 
// 			}}
// 		/>
// 		<BottomTab.Screen
// 			name={AppRoute.PROFILE}
// 			component={ProfileNavigator}
// 			options={{
// 				title:      "PROFILE",
// 				tabBarIcon: PersonIcon, 
// 			}}
// 		/>
// 	</BottomTab.Navigator>
// );

export const HomeNavigator = (): React.ReactElement => (
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
	<Drawer.Navigator drawerContent={HomeDrawer}>
		<Drawer.Screen
			name={AppRoute.HOME}
			component={HomeScreen}
			options={{
				title:      "Home",
				drawerIcon: HomeIcon, 
			}}
		/>
		<Drawer.Screen
			name={AppRoute.ABOUT}
			component={AboutScreen}
			options={{
				title:      "About",
				drawerIcon: InfoIcon, 
			}}
		/>
	</Drawer.Navigator>
);

