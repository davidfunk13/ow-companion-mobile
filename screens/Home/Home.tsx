import AppScreen from "../../components/AppScreen/AppScreen";
import Battletag from "../../models/Battletag";
import { DotIndicator, MaterialIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator, } from "react-native-indicators";
import { ListItem, } from "react-native-elements/dist/list/ListItem";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { ScrollView, } from "react-native-gesture-handler";
import deleteBattletagThunk from "../../redux/thunks/battletag/delete/deleteBattletagThunk";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import { selectBattletagSearchError, } from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import styles from "./Home.styles";
import { useFocusEffect, } from "@react-navigation/core";
import { Button, Card, Text , } from "react-native-elements";
import React, { useCallback, } from "react";
import { selectBattletags, selectBattletagsError, selectBattletagsLoading, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import { View, } from "react-native";

interface IHomeScreenProps {
	navigation: any
}

const HomeScreen = ({ navigation, }: IHomeScreenProps) => {
	const dispatch = useAppDispatch();

	const battletags = useAppSelector(selectBattletags);

	const battletagsError = useAppSelector(selectBattletagsError);

	const battletagsLoading = useAppSelector(selectBattletagsLoading);

	const searchError = useAppSelector(selectBattletagSearchError);
		
	useFocusEffect(
		useCallback(() => {
			dispatch(getAllBattletagsThunk());
		}, [])
	);

	function handleDelete (id:number){

		dispatch(deleteBattletagThunk(id));

		dispatch(getAllBattletagsThunk());
	}
	
	return (
		<AppScreen>
			<Text h1>Welcome</Text>
			{/* Do not forget to test this somehow and make sure it looks ok and is not just a red json string. */}
			<Text style={styles.errorText}>{battletagsError && JSON.stringify(battletagsError)}</Text>
			{/* dont forget you made this for when you want to disable the screen while its loading  */}
			{/* <LoadingOverlay show={battletagsLoading}/> */}
			{battletagsLoading ? <LoadingSpinner/> 
				: <ScrollView style={styles.elementPadding}>
					<Card wrapperStyle={{ alignSelf: "center", }}>
						{!battletags.length && <Text >No Battletags found!</Text>}
						{battletags.map((item: Battletag, i) => {
							return <ListItem key={i}>
								<Text>{item.name}</Text>
								<Button onPress={() => handleDelete(item.id)} title={"Delete"} />
							</ListItem>;
						})}
					</Card>
				</ScrollView>}	
			
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
