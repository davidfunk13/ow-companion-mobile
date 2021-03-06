import Battletag from "../../models/Battletag";
import { View, } from "react-native";
import { selectModalOpen, } from "../../redux/reducers/modalSlice/modalSlice";
import styles from "./ConfirmationModal.styles";
import { useAppSelector, } from "../../redux/hooks";
import { Button, Divider, Icon, Overlay, Text, } from "react-native-elements";
import React, { FC, } from "react";

interface IConfirmationModalProps {
	heading: string
	data: Battletag
	message: string
	confirmAction: () => void
	confirmActionLoading: boolean
	cancelAction: () => void
}

const ConfirmationModal: FC<IConfirmationModalProps> = ({ heading, message, confirmAction, confirmActionLoading, cancelAction, }) => {
	const open = useAppSelector(selectModalOpen);

	return (
		<Overlay
			onBackdropPress={() => cancelAction()}
			overlayStyle={styles.overlaySpacing}
			isVisible={open}
		>
			<Text h4>{heading}</Text>
			<View style={styles.dividerSpacing}>
				<Divider />
			</View>
			<Text>{message}</Text>
			<View style={styles.buttonContainer}>
				<Button
					title={"Cancel"}
					buttonStyle={styles.cancelButton}
					onPress={() => cancelAction()}
				/>
				<Button
					onPress={() => confirmAction()}
					loading={confirmActionLoading}
					buttonStyle={styles.deleteButton}
					icon={
						<Icon
							name={"close"}
							type={"antdesign"}
							color={"white"}
							tvParallaxProperties={undefined}
						/>
					}
					title={"Delete"}
				/>
			</View>
		</Overlay>
	);
};

export default ConfirmationModal;
