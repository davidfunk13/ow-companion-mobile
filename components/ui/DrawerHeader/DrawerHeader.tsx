import { Divider, } from "@ui-kitten/components";
import { FC, } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import styles from "./DrawerHeader.styles";
import { ImageBackground, ViewStyle, } from "react-native";

interface IDrawerHeaderProps {
    style?: ViewStyle
}

const DrawerHeader:FC<IDrawerHeaderProps> = ({ style , }) => (
	<>
		<ImageBackground
			style={[ style, styles.header, ]}
			source={require("../../../assets/images/ow-header.png")}
		/>
		<Divider/>
	</>
);

export default DrawerHeader;
