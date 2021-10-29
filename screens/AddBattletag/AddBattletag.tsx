import AppScreen from "../../components/AppScreen/AppScreen";
import Battletag from "../../models/Battletag";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput";
import { Card, } from "react-native-elements/dist/card/Card";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView, View, } from "react-native";
import battletagSearch from "../../redux/thunks/battletagSearch/battletagSearchThunk";
import deleteBattletagThunk from "../../redux/thunks/battletag/delete/deleteBattletagThunk";
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import saveBattletagThunk from "../../redux/thunks/battletag/save/saveBattletagThunk";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, ListItem, Text, } from "react-native-elements";
import { NavigationProp, useFocusEffect, useNavigation, } from "@react-navigation/core";
import React, { useCallback, useEffect, } from "react";
import {
	resetBattletagSearchSlice,
	selectBattletagSearchBattletags,
	selectBattletagSearchError,
	selectBattletagSearchLoading,
} from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import { selectBattletags, selectBattletagsError, selectBattletagsLoading, } from "../../redux/reducers/battletagsSlice/battletagsSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
interface IAddBattletagScreenProps {
	navigation?: NavigationProp<never, never>
}

const initialValues: BattletagSearchInput = { battletag: "", };

const AddBattletagScreen: React.FC<IAddBattletagScreenProps> = () => {
	const dispatch = useAppDispatch();

	const searchLoading = useAppSelector(selectBattletagSearchLoading);

	const searchError = useAppSelector(selectBattletagSearchError);

	const searchBattletags = useAppSelector(selectBattletagSearchBattletags);

	const battletagsLoading = useAppSelector(selectBattletagsLoading);

	const battletags = useAppSelector(selectBattletags);

	const battletagsError = useAppSelector(selectBattletagsError);
	
	const navigation = useNavigation();
	
	// useFocusEffect(
	// 	useCallback(() => {
	// 		return () => {
	// 			dispatch(resetBattletagSearchSlice());
	// 		};
	// 	}, [])
	// );
	
	function handleSave (battletag: Battletag) {
		dispatch(saveBattletagThunk(battletag));

		navigation.navigate("Home" as any);
	}

	return (
		<AppScreen>
			<Text h1 >Add Battletag</Text>
			<Text >Add a new battletag to your app to track.</Text>
			<ScrollView style={styles.scrollViewPadding}>
				{searchBattletags.map(battletag => {
					return <View key={battletag.id} style={{ padding: 10 , }}> 
						<Button
							style={{ margin: 60 , }}
							onPress={() => handleSave(battletag) }
							title={battletag.name}
						/>
					</View>;
				})}
			
			</ScrollView>
			<Formik
				validateOnBlur={false}
				validateOnMount={false}
				validateOnChange={false}
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={values => dispatch(battletagSearch(values.battletag))}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors, }) => (
					<>
						<Input
							renderErrorMessage
							onChangeText={handleChange("battletag")}
							onBlur={handleBlur("battletag")}
							value={values.battletag}
							errorMessage={errors.battletag}
							placeholder={"Search for Battletag."}
							leftIcon={
								<Icon
									style={styles.searchIcon}
									name={"search1"}
									size={24}
									color={"grey"}
								/>
							}
						/>

						<Button loading={searchLoading} title={"Submit"} onPress={() => handleSubmit()} />
					</>
				)}
			</Formik>
		</AppScreen>
	);
};

export default AddBattletagScreen;
