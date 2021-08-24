import { BottomHomeScreenProps, } from "../../navigation/AppStack/AppStack";
import React from "react";
import {
	BottomNavigation,
	BottomNavigationTab,
	BottomNavigationTabElement,
	Divider,
} from "@ui-kitten/components";
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset, } from "../../components/safe-area-layout.component";

export const HomeTabBar = (props: BottomHomeScreenProps): SafeAreaLayoutElement => {

	const onSelect = (index: number): void => {
		const selectedTabRoute: string = props.state.routeNames[index];

		props.navigation.navigate(selectedTabRoute);
	};

	const createNavigationTabForRoute = (route: any): BottomNavigationTabElement => {
		const { options, } = props.descriptors[route.key];
		
		return (
			<BottomNavigationTab
				key={route.key}
				title={options.title}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore: all Tab Screens strictly have UI Kitten Icon
				icon={options.tabBarIcon}
			/>
		);
	};

	return (
		<SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
			<Divider/>
			<BottomNavigation
				appearance={"noIndicator"}
				selectedIndex={props.state.index}
				onSelect={onSelect}>
				{props.state.routes.map(createNavigationTabForRoute)}
			</BottomNavigation>
		</SafeAreaLayout>
	);
};
