import BellIcon from "../Icons/BellIcon/BellIcon";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import ForwardIcon from "../Icons/ForwardIcon/ForwardIcon";
import PersonIcon from "../Icons/PersonIcon/PersonIcon";
import React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";

interface INavigationState {
	index: number 
	routeNames: string[]
}
interface INavigation {
	navigate: (arg: string) => void
}

interface IDrawerProps {
	navigation: INavigation
	state: INavigationState
}

const Drawer = createDrawerNavigator();

const AppDrawer = ({ navigation, state, }: IDrawerProps) => {
	return (
		// <Drawer
		// 	header={<DrawerHeader/>}
		// 	selectedIndex={state.index as unknown as IndexPath}
		// 	onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
		// >
		// 	<DrawerItem
		// 		title={"Home"}
		// 		accessoryLeft={<PersonIcon/>}
		// 		accessoryRight={<ForwardIcon/>}
		// 	/>
		// 	<DrawerItem
		// 		title={"Details"}
		// 		accessoryLeft={<BellIcon/>}
		// 		accessoryRight={<ForwardIcon/>}
		// 	/>
		// </Drawer>
		<></>
	);
};

export default AppDrawer;
