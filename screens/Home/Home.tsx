import AppScreen from "../../components/AppScreen/AppScreen";
import BattletagList from "../../components/BattletagList/BattletagList";
import { Text, } from "react-native-elements";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import { selectBattletagSearchError, } from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import styles from "./Home.styles";
import { useFocusEffect, } from "@react-navigation/core";
import React, { useCallback, } from "react";
import { selectBattletags, selectBattletagsError, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";

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
			{/* Do not forget to test this somehow and make sure it looks ok and is not just a red json string. */}
			<Text style={styles.errorText}>{battletagsError && JSON.stringify(battletagsError)}</Text>
			<BattletagList battletags={battletags} battletagAction={() => console.log("hey select this fuck you.")} enableDelete={true}/>			
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
