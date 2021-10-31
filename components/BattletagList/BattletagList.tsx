import { AppDispatch, } from "../../redux/store";
import Battletag from "../../models/Battletag";
// import styles from "./BattletagList.styles";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Overlay, } from "react-native-elements/dist/overlay/Overlay";
import { View, } from "react-native";
import deleteBattletagThunk from "../../redux/thunks/battletag/delete/deleteBattletagThunk";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import { Avatar, Button, Card, Icon, ListItem, Text, } from "react-native-elements";
import React, { FC, } from "react";
import { selectBattletagsLoading, selectDeleteBattletagLoading, selectSelectedBattletag, setSelectedBattletag, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import { selectModalOpen, setModalOpen, } from "../../redux/reducers/modalSlice/modalSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";

interface IBattletagListProps {
    battletags: Battletag[]
    battletagAction: (battletag: Battletag) => void
    enableDelete?: boolean
}

export async function handleDelete (dispatch: AppDispatch, id: number){
	await dispatch(deleteBattletagThunk(id));

	dispatch(setModalOpen(false));

	dispatch(getAllBattletagsThunk());
}

export function handleClose(dispatch: AppDispatch){
	dispatch(setModalOpen(false));
}

export function handleSelectBattletagForDelete(dispatch: AppDispatch, data: Battletag){
	dispatch(setModalOpen(true));

	dispatch(setSelectedBattletag(data));
}

const BattletagList: FC<IBattletagListProps> = ({ battletags, battletagAction, enableDelete, }) => {
	const dispatch = useAppDispatch();

	const deleteBattletagLoading = useAppSelector(selectDeleteBattletagLoading);

	const battletagsLoading = useAppSelector(selectBattletagsLoading);

	const modalOpen = useAppSelector(selectModalOpen);

	const selectedBattletag = useAppSelector(selectSelectedBattletag);
	
	return (
		<Card containerStyle={{ padding: 0, }}>
			{!battletags.length && !battletagsLoading && <View style={{
				padding:        20,
				display:        "flex",
				flexDirection:  "row",
				justifyContent: "center", 
			}}><Text >No Battletags found!</Text></View>}
			{battletagsLoading && <LoadingSpinner/>}

			{battletags.map((b, i) => (
				<ListItem onPress={() => battletagAction(b)} key={i} bottomDivider>
					<Avatar source={{ uri: "https://via.placeholder.com/150", }} />
					<ListItem.Content>
						<ListItem.Title>{b.urlName}</ListItem.Title>
						<ListItem.Subtitle>{b.platform}</ListItem.Subtitle>
					</ListItem.Content>
					{enableDelete && <Icon onPress={() => handleSelectBattletagForDelete(dispatch, b)} color={"red"} name={"close"} tvParallaxProperties={undefined}></Icon>}					
				</ListItem>
			))}

			<Overlay onBackdropPress={() => handleClose(dispatch)} backdropStyle={{ padding: 10, }} overlayStyle={{ padding: 10, }} isVisible={modalOpen}>
				<Text h4>Are you sure?</Text>
				<Text >Please confirm you want to delete this battletag ({selectedBattletag?.id}) and all of its associated data. This cannot be undone. </Text>
				<View style={{
					padding:        20,
					display:        "flex",
					flexDirection:  "row", 
					justifyContent: "space-evenly",
					width:          "auto",
				}}>
					<Button
						onPress={() => handleClose(dispatch)} 
						buttonStyle={{ minWidth: 100, }}
						title={"Cancel"}
					/>
					<Button
						onPress={() => handleDelete(dispatch, selectedBattletag?.id as number )}
						loading={deleteBattletagLoading}
						buttonStyle={{
							minWidth:        100,
							backgroundColor: "red", 
						}}
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
		</Card>
	);
};

export default BattletagList;
