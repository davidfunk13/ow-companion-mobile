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
import { Divider, } from "react-native-elements/dist/divider/Divider";
import styles from "./BattletagList.styles";

interface IBattletagListProps {
	battletags: Battletag[]
	battletagAction: (battletag: Battletag) => void
	enableDelete?: boolean
}

export async function handleDelete(dispatch: AppDispatch, id: number) {
	await dispatch(deleteBattletagThunk(id));

	dispatch(setModalOpen(false));

	dispatch(getAllBattletagsThunk());
}

export function handleClose(dispatch: AppDispatch) {
	dispatch(setModalOpen(false));
}

export function handleSelectBattletagForDelete(dispatch: AppDispatch, data: Battletag) {
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
			{!battletags.length && !battletagsLoading && <View style={styles.showEmptyStateContainer}><Text >No Battletags found!</Text></View>}
			{battletagsLoading && <LoadingSpinner />}

			{battletags.map((b, i) => (
				<ListItem 
					key={i}
					bottomDivider
					onPress={() => battletagAction(b)}
				>
					<Avatar source={{ uri: "https://via.placeholder.com/150", }} />
					<ListItem.Content>
						<ListItem.Title>{b.urlName}</ListItem.Title>
						<ListItem.Subtitle>{b.platform}</ListItem.Subtitle>
					</ListItem.Content>
					{enableDelete && <Icon
						color={"red"}
						name={"close"} 
						onPress={() => handleSelectBattletagForDelete(dispatch, b)} 
						tvParallaxProperties={undefined}
					/>}
				</ListItem>
			))}

			{/* dont stay comfortable with not making this 100% re-usable. */}
			<Overlay
				onBackdropPress={() => handleClose(dispatch)}
				overlayStyle={styles.overlaySpacing}
				isVisible={modalOpen}
			>
				<Text h4>Are you sure?</Text>
				<View style={styles.dividerSpacing}>
					<Divider />
				</View>
				<Text>Delete battletag ({selectedBattletag?.id}) and all of its associated data?. This cannot be undone.</Text>
				<View style={styles.buttonContainer}>
					<Button
						title={"Cancel"}
						buttonStyle={styles.cancelButton}
						onPress={() => handleClose(dispatch)} 
					/>
					<Button
						//i really dont like this possibly being undefined. perhaps working with a zero'd value in the store,
						//  or putting a conditional here to  dispatch a different action if theres not an id
						onPress={() => handleDelete(dispatch, selectedBattletag?.id as number)}
						loading={deleteBattletagLoading}
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
		</Card>
	);
};

export default BattletagList;
