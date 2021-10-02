import { Button, } from "react-native-elements";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import React from "react";
import { Text, } from "react-native-elements";
import { View, } from "react-native";
import styles from "./AppDrawer.styles";
import theme from "../../theme";
import { Avatar, Icon, } from "react-native-elements";
import { DrawerContentScrollView, DrawerItemList, } from "@react-navigation/drawer";

interface IAppDrawerProps {
	state: any,
	navigation: any,
	descriptors: any
}

const mockProfileImage = "https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";

const AppDrawer = (props: IAppDrawerProps) => {
	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				<View style={styles.headerContainer}>
					<DrawerHeader>
						<View>
							<Text style={styles.headerText}>John Doe</Text>
							<Text style={styles.headerText}>example@email.com</Text>
						</View>
						<Avatar size={"large"} rounded
							source={{ uri: mockProfileImage, }}
						/>
					</DrawerHeader>
				</View>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<Button
				buttonStyle={styles.logoutButton}
				icon={<Icon size={24}
					color={theme.palette.common.white}
					style={styles.logoutIcon}
					name={"logout"} 
				/>}
				title={"Log out"}
			/>
		</View>
	);
};

export default AppDrawer;
