import { AppDispatch, } from "../../redux/store";
import Battletag from "../../models/Battletag";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import IconList from "../../models/IconList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { View, } from "react-native";
import deleteBattletagThunk from "../../redux/thunks/battletag/delete/deleteBattletagThunk";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import icons from "../../icons.json";
import { setModalOpen, } from "../../redux/reducers/modalSlice/modalSlice";
import styles from "./BattletagList.styles";
import { Avatar, Card, Icon, ListItem, Text, } from "react-native-elements";
import React, { FC, } from "react";
import { selectBattletagsLoading, selectDeleteBattletagLoading, selectSelectedBattletag, setSelectedBattletag, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";

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

	const selectedBattletag = useAppSelector(selectSelectedBattletag);
	
	return (
		<Card containerStyle={styles.cardContainer}>
			{!battletags.length && !battletagsLoading && <View style={styles.showEmptyStateContainer}><Text >No Battletags found!</Text></View>}
			{battletagsLoading && <LoadingSpinner />}
			{battletags.map((b, i) => (
				<ListItem 
					key={i}
					bottomDivider
					onPress={() => battletagAction(b)}
				>
					<Avatar source={{ uri: (icons as IconList)[b.portrait].icon, }} />
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

			<ConfirmationModal
				item={selectedBattletag as Battletag}
				cancelAction={() => handleClose(dispatch)}
				confirmActionLoading={deleteBattletagLoading}
				confirmAction={() => handleDelete(dispatch, selectedBattletag?.id as number)}
				heading={"Are you sure?"}
				message={`Delete battletag (${selectedBattletag?.id}) and all of its associated data?. This cannot be undone.`}
			/>
		</Card>
	);
};

export default BattletagList;
