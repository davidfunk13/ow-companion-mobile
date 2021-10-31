import { View, } from "react-native";
import { Button, Divider, Icon, Overlay, Text, } from "react-native-elements";
import React, { FC, } from "react";
import { selectModalOpen, setModalOpen, } from "../../redux/reducers/modalSlice/modalSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import styles from "../AppScreen/AppScreen.styles";

interface IConfirmationModalProps {
	heading: string
	message: string
	confirmAction: (id:number) => void
	confirmActionLoading: boolean
	cancelAction: () => void
}

const ConfirmationModal: FC<IConfirmationModalProps> = ({ heading, message, confirmAction, confirmActionLoading, cancelAction, }) => {
	const dispatch = useAppDispatch();

	const open = useAppSelector(selectModalOpen);
	
	return (
		<Overlay overlayStyle={{ padding: 10, }} onBackdropPress={() => dispatch(setModalOpen(false))} isVisible={open}>
			<Text h4>{heading}</Text>
			<Text >{message}</Text>
			<View style={{
				padding:        20,
				display:        "flex",
				flexDirection:  "row", 
				justifyContent: "space-evenly",
				width:          "auto",
			}}>
				<Button 
					onPress={() => cancelAction()} 
					buttonStyle={{ minWidth: 100, }}
					title={"Cancel"}
				/>
				<Button
					onPress={() => confirmAction()}
					loading={confirmActionLoading}
					buttonStyle={{
						minWidth:        100,
						backgroundColor: "red", 
					}}
					icon={
						<Icon
							name={"close"}
							type={"antdesign"}
							color={"white"}
							tvParallaxProperties={undefined}						/>
					}
					
					title={"Delete"}
				/>
			</View>
		</Overlay>
	);
};

export default ConfirmationModal;
