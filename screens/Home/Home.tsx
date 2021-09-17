import React from "react";
import { TestComponent, } from "../../components/TestComponent/TestComponent";
import { selectStatus, } from "../../redux/reducers/test/testSlice";
import { useAppSelector, } from "../../redux/hooks";
import { Divider, Layout, TopNavigation, } from "@ui-kitten/components";
import { Button, SafeAreaView, Text, } from "react-native";
import { MonoText } from "../../components/StyledText";

interface IHomeScreenProps {
    navigation: any
}

const HomeScreen = ({ navigation, }: IHomeScreenProps) => {
	const isLoading = useAppSelector(selectStatus);

	const navigateDetails = () => {
		navigation.navigate("Details");
	};
	
	return (
		<SafeAreaView style={{ flex: 1, }}>

			<TopNavigation title={"MyApp"} alignment={"center"}/>
			<Divider/>
			<Layout style={{
				flex:           1,
				justifyContent: "center",
				alignItems:     "center", 
			}}>
				<Button title={"Open Details"} onPress={navigateDetails}>Open Details</Button>
				<Text>{isLoading}</Text>
				<TestComponent/>
			</Layout>
		</SafeAreaView>
	);
};

export default HomeScreen;
