import { Divider, Drawer, DrawerItem, Icon, IndexPath, } from "@ui-kitten/components";
import { ImageBackground, StyleSheet, } from "react-native";
import React,{ useState, } from "react";
import DrawerHeader from "../DrawerHeader/DrawerHeader";

const PersonIcon = (props: any) => (
	<Icon {...props} name={"person-outline"} />
);

const BellIcon = (props: any) => (
	<Icon {...props} name={"bell-outline"} />
);

const ForwardIcon = (props: any) => (
	<Icon {...props} name={"arrow-ios-forward"} />
);

interface IDrawerProps {
    navigation: any
    state: any
}

const DrawerThemingShowcase = ({ navigation, state, }: IDrawerProps) => {
	return (
		<Drawer
			header={<DrawerHeader/>}
			selectedIndex={state.index}
			onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
		>
			<DrawerItem
				title={"Users"}
				accessoryLeft={PersonIcon}
				accessoryRight={ForwardIcon}
			/>
			<DrawerItem
				title={"Orders"}
				accessoryLeft={BellIcon}
				accessoryRight={ForwardIcon}

			/>
		</Drawer>
	);
};

export default DrawerThemingShowcase;
