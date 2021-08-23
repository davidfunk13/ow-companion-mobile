import Header from "./Header/Header";
import React from "react";
import { Drawer, DrawerItem, Icon, } from "@ui-kitten/components";

export const AppDrawer = () => {
	
	const [ selectedIndex, setSelectedIndex, ] = React.useState(1);

	return (
		<Drawer
			header={Header}
			selectedIndex={selectedIndex as any}
			onSelect={index => setSelectedIndex(index as any)}>
			<DrawerItem
				title={"Users"}
				accessoryLeft={(props) => <Icon {...props} name={"person-outline"} />}
				accessoryRight={(props) => <Icon {...props} name={"arrow-ios-forward"} />}
			/>
			<DrawerItem
				title={"Orders"}
				accessoryLeft={(props) => <Icon {...props} name={"bell-outline"} />}
				accessoryRight={(props) => <Icon {...props} name={"arrow-ios-forward"} />}
			/>
		</Drawer>
	);
};

export default AppDrawer;
