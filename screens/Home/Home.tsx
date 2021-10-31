import AppScreen from "../../components/AppScreen/AppScreen";
import BattletagList, { handleSelectBattletagForDelete, } from "../../components/BattletagList/BattletagList";
import { Text, } from "react-native-elements";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import { selectBattletagSearchError, } from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import styles from "./Home.styles";
import { FAB, Icon, } from "react-native-elements";
import React, { FC, useCallback, } from "react";
import { selectBattletags, selectBattletagsError, selectSelectedBattletag, setSelectedBattletag, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import { useFocusEffect, useNavigation, } from "@react-navigation/core";
import { AppDispatch, } from "../../redux/store";
import Battletag from "../../models/Battletag";

interface IHomeScreenProps {

}

export function selectBattletag(dispatch:AppDispatch, b:Battletag) {
	dispatch(setSelectedBattletag(b));
}

const HomeScreen: FC = () => {
	const dispatch = useAppDispatch();

	const battletags = useAppSelector(selectBattletags);

	const battletagsError = useAppSelector(selectBattletagsError);

	const searchError = useAppSelector(selectBattletagSearchError);

	const selectedBattletag = useAppSelector(selectSelectedBattletag);
	
	const navigation = useNavigation();

	useFocusEffect(
		useCallback(() => {
			dispatch(getAllBattletagsThunk());
		}, [])
	);

	return (
		<AppScreen>
			<Text h1>Welcome</Text>
			<Text h4>Current: {selectedBattletag?.urlName}</Text>
			{/* Do not forget to test this somehow and make sure it looks ok and is not just a red json string. */}
			<Text style={styles.errorText}>{battletagsError && JSON.stringify(battletagsError)}</Text>
			<BattletagList battletags={battletags} battletagAction={selectBattletag} enableDelete={true} />
			<FAB
				onPress={() => navigation.navigate("Add Battletag" as never)}
				color={"blue"}
				icon={
					<Icon 
						name={"plus"}
						color={"white"}
						type={"antdesign"}
						tvParallaxProperties={undefined} 
					/>
				}
				placement={"right"}
				size={"large"}
				title={"Add New Battletag"} 
			/>

			{!!searchError &&
				<Text style={{
					...styles.errorText,
					...styles.elementPadding,
				}}>
					{searchError}
				</Text>
			}
		</AppScreen>
	);
};

export default HomeScreen;
