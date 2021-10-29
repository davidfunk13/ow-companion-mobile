import { MaterialIndicator, } from "react-native-indicators";
import React from "react";
import { Text, View, } from "react-native";

const LoadingSpinner = () => {
	return (
		<View style={{
			height:     100,
			display:    "flex",
			alignItems: "center", 
		}}>
			<MaterialIndicator color={"red"} trackWidth={4} size={60}/>
			<Text>Loading...</Text>
		</View>
	);
};

export default LoadingSpinner;
