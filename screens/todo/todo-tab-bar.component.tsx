import { AppRoute, } from "../../navigation/app-routes";
import React from "react";
import { TodoScreenProps, } from "../../navigation/TodoStack/todo.navigator";
import { Toolbar, } from "../../components/toolbar.component";
import { Divider, MenuItem, Tab, TabBar, TabElement, } from "@ui-kitten/components";
import { InfoIcon, LogoutIcon, MenuIcon, } from "../../assets/icons";
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset, } from "../../components/safe-area-layout.component";

export const TodoTabBar = (props: TodoScreenProps): SafeAreaLayoutElement => {

	const onMenuItemSelect = (index: number): void => {

		// switch (selectedItem.title) {
		// case "Log Out":
		// 	props.navigation.navigate(AppRoute.AUTH);

		// 	break;
		// default:
		// 	props.navigation.navigate(selectedItem.title);

		// 	break;
		// }
	};

	const onTabSelect = (index: number): void => {
		const selectedTabRoute: string = props.state.routeNames[index];

		props.navigation.navigate(selectedTabRoute);
	};

	const createNavigationTabForRoute = (route:any): TabElement => {
		const { options, } = props.descriptors[route.key];
		
		return (
			<Tab
				key={route.key}
				title={options.title}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore: all Tab Screens options strictly have UI Kitten Icon
				icon={options.tabBarIcon}
			/>
		);
	};

	const renderToolbarMenu = (): React.ReactElement => (
		<React.Fragment>
			<MenuItem
				title={"About"}
				accessoryLeft={InfoIcon}
			/>
			<MenuItem
				title={"Log Out"}
				accessoryLeft={LogoutIcon}
			/>
		</React.Fragment>
	);

	return (
		<SafeAreaLayout insets={SaveAreaInset.TOP}>
			<Toolbar
				title={"React Navigation Ex 🐱"}
				// onMenuItemSelect={() => {}}
				menu={renderToolbarMenu}
				backIcon={MenuIcon}
				onBackPress={props.navigation.toggleDrawer}
			/>
			<TabBar
				selectedIndex={props.state.index}
				onSelect={onTabSelect}>
				{props.state.routes.map(createNavigationTabForRoute)}
			</TabBar>
			<Divider />
		</SafeAreaLayout>
	);
};
