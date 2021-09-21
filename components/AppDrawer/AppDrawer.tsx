import { Avatar, } from "react-native-elements";
import React from "react";
import { TouchableOpacity, } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItemList, } from "@react-navigation/drawer";
import { Text, } from "react-native-elements";
import { View , } from "react-native";
import DrawerHeader from "../DrawerHeader/DrawerHeader";

const AppDrawer = (props: any) => {
	return (
		<View style={{ flex: 1, }}>
			<DrawerContentScrollView style={{ backgroundColor: "#2C3458", }} {...props}>
				<View
					style={{
						flexDirection:   "row",
						justifyContent:  "space-between",
						alignItems:      "center",
						backgroundColor: "#2C3458",
						marginBottom:    50,
						height:          125,

					}}
				>
					
					<DrawerHeader>
						<View>
							<Text style={{ color: "white" , }}>John Doe</Text>
							<Text style={{ color: "white" , }}>example@email.com</Text>
						</View>
						<Avatar
							size={"large"}
							rounded
							source={{ uri: "https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", }}
						/>
					</DrawerHeader>
					
				</View>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<TouchableOpacity
				style={{
					position:        "absolute",
					right:           0,
					left:            0,
					bottom:          500,
					backgroundColor: "#f6f6f6",
					padding:         20,
				}}
			>
				<Text>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AppDrawer;
