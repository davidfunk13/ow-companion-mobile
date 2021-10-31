import { MaterialIndicator, } from "react-native-indicators";
import React from "react";
import styles from "./LoadingSpinner.styles";
import { Text, View, } from "react-native";

const LoadingSpinner = () => {
	return (
		<View style={styles.spinnerContainer}>
			<MaterialIndicator 
				color={"red"} 
				trackWidth={4}
				size={60}
			/>
			<Text>Loading...</Text>
		</View>
	);
};

export default LoadingSpinner;
