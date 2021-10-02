import AppScreen from "../../components/AppScreen/AppScreen";
import React from "react";
import { Text, } from "react-native-elements";

interface IHomeScreenProps {
	navigation: any
}

const HomeScreen = ({ navigation, }: IHomeScreenProps) => {

	return (
		<AppScreen>
			<Text h1>Welcome</Text>
		</AppScreen>	
	);
};

export default HomeScreen;
