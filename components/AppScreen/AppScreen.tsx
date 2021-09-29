import { FC, } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { SafeAreaView, } from "react-native";

interface IAppScreenProps {

}

const AppScreen: FC<IAppScreenProps> = ({ children, }) => {
	return (
		<SafeAreaView >
			{children}
		</SafeAreaView>
	);
};

export default AppScreen;
