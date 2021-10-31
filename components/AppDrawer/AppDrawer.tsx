import { Button, } from "react-native-elements";
import DrawerHeader from "../DrawerHeader/DrawerHeader";
import IconList from "../../models/IconList"; 
import React from "react";
import { Text, } from "react-native-elements";
import { View, } from "react-native";
import icons from "../../icons.json";
import { selectSelectedBattletag, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import styles from "./AppDrawer.styles";
import theme from "../../theme";
import { useAppSelector, } from "../../redux/hooks";
import { Avatar, Icon, } from "react-native-elements";
import { DrawerContentScrollView, DrawerItemList, } from "@react-navigation/drawer";

interface IAppDrawerProps {
	state: never,
	navigation: never,
	descriptors: never
}

const AppDrawer = (props: IAppDrawerProps) => {

	const selectedBattletag = useAppSelector(selectSelectedBattletag);
	
	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				{selectedBattletag &&
					<DrawerHeader style={styles.headerContainer}>
						<Avatar size={"large"}
							source={{ uri: (icons as IconList)[selectedBattletag?.portrait as string].icon, }} 
						/>
						<View>
							<Text h1 h1Style={styles.headerTextBold}>{selectedBattletag.name.toUpperCase()}</Text>
							<Text style={styles.headerText}>{selectedBattletag.platform.toUpperCase()}</Text>
						</View>
					</DrawerHeader>
				}
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<Button
				buttonStyle={styles.logoutButton}
				icon={
					<Icon 
						size={24}
						color={theme.palette.common.white}
						style={styles.logoutIcon}
						name={"logout"}
						tvParallaxProperties={undefined}
					/>
				}
				title={"Log out"}
			/>
		</View>
	);
};

export default AppDrawer;
