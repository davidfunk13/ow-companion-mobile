import { FC, } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import styles from "./DrawerHeader.styles";
import { ImageBackground, View, ViewStyle, } from "react-native";
import { DrawerContentScrollView, } from "@react-navigation/drawer";

interface IDrawerHeaderProps {
	style?: ViewStyle
}

const DrawerHeader: FC<IDrawerHeaderProps> = ({ style, children, }) => {
	return (
		<>
			<ImageBackground
				style={[ style, styles.header, ]}
				source={require("../../assets/images/ow-header.png")}
			>
				{children}
			</ImageBackground>
		</ >
	);
};

export default DrawerHeader;
