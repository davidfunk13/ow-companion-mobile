import { Avatar, } from "react-native-elements";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import React from "react";
import { Text, } from "react-native-elements";
import { TouchableOpacity, } from "react-native-gesture-handler";
import { View, } from "react-native";
import styles from "./AppDrawer.styles";
import { DrawerContentScrollView, DrawerItemList, } from "@react-navigation/drawer";

interface IAppDrawerProps {
	state: any,
	navigation: any,
	descriptors: any
}

const mockProfileImage = "https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";

const AppDrawer = (props: IAppDrawerProps) => {
	console.log({
		props,
		message: "hey, fuck you, guy." ,
	});
	
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
			<TouchableOpacity style={styles.touchableOpacity}>
				<Text>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AppDrawer;
