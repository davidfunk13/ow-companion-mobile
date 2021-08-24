import { DrawerHomeScreenProps, } from "../../navigation/home.navigator";
import React from "react";
import { RenderProp, } from "@ui-kitten/components/devsupport";
import { Drawer, DrawerElement, DrawerItem, DrawerItemElement, IndexPath, TextProps, } from "@ui-kitten/components";
import { ImageBackground, ImageBackgroundProps, StyleSheet, } from "react-native";

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
	<ImageBackground
		style={styles.header}
		source={require("../../assets/image-background.jpeg")}
	/>
);

export const HomeDrawer = (props: DrawerHomeScreenProps): DrawerElement => {

	const onItemSelect = (index: IndexPath): void => {
		const selectedTabRoute: string = props.state.routeNames[index.row];

		props.navigation.navigate(selectedTabRoute);

		props.navigation.closeDrawer();
	};

	const createDrawerItemForRoute = (route: { key: string | number; name: React.ReactText | RenderProp<TextProps> | undefined; }, index: number): DrawerItemElement => {
		const { options, } = props.descriptors[route.key];
		
		return (
			<DrawerItem
				key={index}
				title={route.name}
				accessoryLeft={options.drawerIcon as any}
			/>
		);
	};

	return (
		<Drawer
			header={DrawerHeader}
			onSelect={onItemSelect}>
			{props.state.routes.map(createDrawerItemForRoute)}
		</Drawer>
	);
};

const styles = StyleSheet.create({ header: { height: 160, }, });
