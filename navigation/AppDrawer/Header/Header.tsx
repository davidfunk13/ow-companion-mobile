import { Divider, } from "@ui-kitten/components";
import { ImageBackground, } from "react-native";
import React from "react";
import styles from "./Header.styles";

const Header = (props: any) => (
	<>
		<ImageBackground
			style={[ props.style, styles.header, ]}
			source={require("../../../assets/p.png")}
		/>
		<Divider />
	</>
);

export default Header;
