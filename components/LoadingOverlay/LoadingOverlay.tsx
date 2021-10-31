import React from "react";
import styles from "./LoadingOverlay.styles";
import { ActivityIndicator, Modal, Text, View, } from "react-native";

interface ILoadingOverlayProps {
    show?: boolean
    loadingMessage?: string
}

const LoadingOverlay = (props:ILoadingOverlayProps ) => {
	const {
		show = false,
		loadingMessage = "Doing stuff ...",
	} = props;
	
	return (
		<Modal transparent={true} animationType={"none"} visible={show}>
			<View style={styles.modalStyle} >
				<View style={styles.innerModalStyle}>
					<ActivityIndicator animating={show} color={"red"} size={"large"} />
					<Text>{loadingMessage}</Text>
				</View>
			</View>
		</Modal>
	);
};

export default LoadingOverlay;
