import React from "react";
import { ActivityIndicator, Modal, Text, View, } from "react-native";

interface ILoadingOverlayProps {
    show?: boolean
    color?: string
    backgroundColor?: string
    dimLights?: number
    loadingMessage?: string
}

const LoadingOverlay = (props:ILoadingOverlayProps ) => {
	const {
		show = false,
		color = "black",
		backgroundColor = "white",
		dimLights = 0.6,
		loadingMessage = "Doing stuff ...",
	} = props;
	
	return (
		<Modal transparent={true} animationType={"none"} visible={show}>
			<View
				style={{
					flex:            1,
					alignItems:      "center",
					justifyContent:  "center",
					backgroundColor: `rgba(0,0,0,${dimLights})`,
				}}
			>
				<View
					style={{
						padding:         13,
						backgroundColor: `${backgroundColor}`,
						borderRadius:    13,
					}}
				>
					<ActivityIndicator animating={show} color={color} size={"large"} />
					<Text style={{ color: `${color}`, }}>{loadingMessage}</Text>
				</View>
			</View>
		</Modal>
	);
};

export default LoadingOverlay;