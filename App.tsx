import * as eva from "@eva-design/eva";
import React from "react";
import { ApplicationProvider, Divider, Drawer, DrawerItem, Icon, IconRegistry, Layout, Text, } from "@ui-kitten/components";
import { ImageBackground, StyleSheet, } from "react-native";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";

const HomeScreen = () => (
	<Layout style={{
		flex:           1,
		justifyContent: "center",
		alignItems:     "center",
	}}>
		<Text category={"h1"}>HOME</Text>
	</Layout>
);

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
			source={require("./assets/p.png")}
		/>
		<Divider />
	</React.Fragment>
);

export const DrawerAccessoriesShowcase = () => {

	const [ selectedIndex, setSelectedIndex, ] = React.useState(1);

	return (
		<Drawer
			header={Header}
			selectedIndex={selectedIndex as any}
			onSelect={index => setSelectedIndex(index as any)}>
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

const styles = StyleSheet.create({
	header: {
		height:        128,
		flexDirection: "row",
		alignItems:    "center",
	},
});

const App = () => {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			< ApplicationProvider {...eva} theme={eva.light} >
				<DrawerAccessoriesShowcase />
				<HomeScreen />
			</ApplicationProvider >
		</>
	);
}
	;

export default App;
