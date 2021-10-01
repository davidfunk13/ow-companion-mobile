import { FC, } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { SafeAreaView, } from "react-native";
import styles from "./AppScreen.styles";

interface IAppScreenProps {

}

const AppScreen: FC<IAppScreenProps> = ({ children, }) => {
	return (
		<SafeAreaView style={styles.background} >
			{children}
		</SafeAreaView>
	);
};

export default AppScreen;
