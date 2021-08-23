import { Divider, Drawer, DrawerItem, Icon, IndexPath, } from "@ui-kitten/components";
import { ImageBackground, StyleSheet, } from "react-native";
import React,{ useState, } from "react";

const PersonIcon = (props: any) => (
	<Icon {...props} name={"person-outline"} />
);

const BellIcon = (props: any) => (
	<Icon {...props} name={"bell-outline"} />
);

const ForwardIcon = (props: any) => (
	<Icon {...props} name={"arrow-ios-forward"} />
);

const Header = (props: any) => (
	<React.Fragment>
		<ImageBackground
			style={[ props.style, styles.header, ]}
			source={require("../../assets/p.png")}
		/>
		<Divider />
	</React.Fragment>
);

const styles = StyleSheet.create({
	header: {
		height:        128,
		flexDirection: "row",
		alignItems:    "center",
	},
});

interface IDrawerProps {
    navigation: any
    state: any
}

const DrawerThemingShowcase = ({ navigation, state, }: IDrawerProps) => {
	return (
		<Drawer
			header={Header}
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
