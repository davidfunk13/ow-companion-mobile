import AppScreen from "../../components/AppScreen/AppScreen";
import React from "react";
import { TestComponent, } from "../../components/TestComponent/TestComponent";
import { Text, } from "react-native";
import { selectStatus, } from "../../redux/reducers/test/testSlice";
import { useAppSelector, } from "../../redux/hooks";

interface IHomeScreenProps {
	navigation: any
}

const HomeScreen = ({ navigation, }: IHomeScreenProps) => {
	const isLoading = useAppSelector(selectStatus);

	// const navigateDetails = () => {
	// 	navigation.navigate("Details");
	// };

	return (
		<AppScreen>
			<Text>Loading: {isLoading}</Text>
			<TestComponent />
		</AppScreen>
			
	);
};

export default HomeScreen;
