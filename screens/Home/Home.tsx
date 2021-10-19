import AppScreen from "../../components/AppScreen/AppScreen";
import React, { useCallback, useEffect , } from "react";
import { Card, Text, } from "react-native-elements";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import { Button, } from "react-native-elements/dist/buttons/Button";
import { ScrollView, } from "react-native-gesture-handler";
import styles from "./Home.styles";
import { selectBattletags, selectBattletagsError, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import Battletag from "../../models/Battletag";
import { ListItem, } from "react-native-elements/dist/list/ListItem";
import deleteBattletagThunk from "../../redux/thunks/battletag/delete/deleteBattletagThunk";
import { resetBattletagSearchSlice, selectBattletagSearchError, } from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import { useFocusEffect, } from "@react-navigation/core";

interface IHomeScreenProps {
	navigation: any
}

const HomeScreen = ({ navigation, }: IHomeScreenProps) => {
	const dispatch = useAppDispatch();

	const battletags = useAppSelector(selectBattletags);

	const battletagsError = useAppSelector(selectBattletagsError);

	const searchError = useAppSelector(selectBattletagSearchError);
		
	useFocusEffect(
		useCallback(() => {
			dispatch(getAllBattletagsThunk());
		}, [])
	);

	return (
		<AppScreen>
			<Text h1>Welcome</Text>
			<Text style={styles.elementPadding}>CURRENT: </Text>
			<Button onPress={() => dispatch(getAllBattletagsThunk())} title={"get things"} />

			<Text style={styles.errorText}>{JSON.stringify(battletagsError)}</Text>
			<ScrollView style={styles.elementPadding}>
				<Card>
					{battletags.map((item: Battletag, i) => {
						return <ListItem key={i} bottomDivider>
							<Text>{item.name}</Text>
							<Button onPress={() => dispatch(deleteBattletagThunk(item.id))} title={"Delete"} />
						</ListItem>;
					})}
				</Card>
			</ScrollView>
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
