import { AppRoute, } from "../app-routes";
import React from "react";
import { TodoTabNavigationProp, } from "../AppStack/AppStack";
import { CompositeNavigationProp, RouteProp, } from "@react-navigation/core";
import { DoneAllIcon, GridIcon, } from "../../assets/icons";
import {
	MaterialTopTabBarProps,
	MaterialTopTabNavigationProp,
	createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { StackNavigationProp, createStackNavigator, } from "@react-navigation/stack";
import {
	TodoDetailsRouteParams,
	TodoDetailsScreen,
	TodoDoneScreen,
	TodoInProgressScreen,
	TodoTabBar,
} from "../../screens/todo";

type TodoNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.TODO_DETAILS]: TodoDetailsRouteParams;
}

type TodoTabsNavigatorParams = {
  [AppRoute.TODO_IN_PROGRESS]: undefined;
  [AppRoute.TODO_DONE]: undefined;
}

export type TodoScreenProps = MaterialTopTabBarProps & {
  navigation: TodoTabNavigationProp;
}

export interface TodoInProgressScreenProps {
  navigation: CompositeNavigationProp<
    TodoTabNavigationProp & StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>,
    MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>>;
  route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>;
}

export interface TodoDoneScreenProps {
  navigation: CompositeNavigationProp<
    TodoTabNavigationProp & StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>,
    MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>>;
  route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>;
}

export interface TodoDetailsScreenProps {
  navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
  route: RouteProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
}

const Stack = createStackNavigator<TodoNavigatorParams>();

const TopTab = createMaterialTopTabNavigator<TodoTabsNavigatorParams>();

// FIXME: Is it possible to track swipe progress?
//
// In this case, it's needed to synchronize tab-bar indicator in TodoScreen
// Currently I have set `swipeEnabled` to `false` just for saving navigation consistence

const TodoTabsNavigator = (): React.ReactElement => (
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore: `tabBar` also contains a DrawerNavigationProp & BottomTabNavigationProp
	<TopTab.Navigator tabBar={props => <TodoTabBar {...props} />}>
		<TopTab.Screen
			name={AppRoute.TODO_IN_PROGRESS}
			component={TodoInProgressScreen}
			options={{
				title:      "IN PROGRESS",
				tabBarIcon: GridIcon, 
			}}
		/>
		<TopTab.Screen
			name={AppRoute.TODO_DONE}
			component={TodoDoneScreen}
			options={{
				title:      "DONE",
				tabBarIcon: DoneAllIcon, 
			}}
		/>
	</TopTab.Navigator>
);

export const TodoNavigator = (): React.ReactElement => (
	<Stack.Navigator screenOptions={{ headerShown: false, }}>
		<Stack.Screen name={AppRoute.TODO} component={TodoTabsNavigator}/>
		<Stack.Screen name={AppRoute.TODO_DETAILS} component={TodoDetailsScreen}/>
	</Stack.Navigator>
);
