import React from "react";
import { SafeAreaView, } from "react-native";

interface IDetailsScreenProps {
	navigation: any
}

const DetailsScreen = ({ navigation, }: IDetailsScreenProps) => {
	const navigateBack = () => {
		navigation.goBack();
	};

	// const BackAction = () => (
	// 	<TopNavigationAction icon={(props) => <Icon {...props} name={"arrow-back"} />} onPress={navigateBack} />
	// );

	return (
		<SafeAreaView style={{ flex: 1, }}>
			{/* <TopNavigation title={"MyApp"} alignment={"center"} accessoryLeft={BackAction} />
			<Divider />
			<Layout style={{
				flex:           1,
				justifyContent: "center",
				alignItems:     "center",
			}}>
				<Text category={"h1"}>DETAILS</Text>
			</Layout> */}
		</SafeAreaView>
	);
};

export default DetailsScreen;
