import { AppDispatch, } from "../../redux/store";
import AppScreen from "../../components/AppScreen/AppScreen";
import Battletag from "../../models/Battletag";
import BattletagList from "../../components/BattletagList/BattletagList";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView, } from "react-native";
import battletagSearch from "../../redux/thunks/battletagSearch/battletagSearchThunk";
import saveBattletagThunk from "../../redux/thunks/battletag/save/saveBattletagThunk";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, Text, } from "react-native-elements";
import { NavigationProp, useFocusEffect, useNavigation, } from "@react-navigation/core";
import React, { useCallback, } from "react";
import {
	resetBattletagSearchSlice,
	selectBattletagSearchBattletags,
	selectBattletagSearchLoading,
} from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";

interface IAddBattletagScreenProps {
	navigation?: NavigationProp<never, never>
}

const initialValues: BattletagSearchInput = { battletag: "", };

export function handleSave (dispatch: AppDispatch, battletag: Battletag, navigation: NavigationProp<never, never>) {
	dispatch(saveBattletagThunk(battletag));

	navigation.navigate("Home" as never);
}

const AddBattletagScreen: React.FC<IAddBattletagScreenProps> = () => {
	const dispatch = useAppDispatch();

	const searchLoading = useAppSelector(selectBattletagSearchLoading);

	const searchBattletags = useAppSelector(selectBattletagSearchBattletags);
	
	useFocusEffect(
		useCallback(() => {
			return () => {
				dispatch(resetBattletagSearchSlice());
			};
		}, [])
	);

	return (
		<AppScreen>
			<Text h1 >Add Battletag</Text>
			<Text >Add a new battletag to your app to track.</Text>
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
			<ScrollView style={styles.scrollViewPadding}>
				<BattletagList battletagAction={handleSave} battletags={searchBattletags}/>
			</ScrollView>
		</AppScreen>
	);
};

export default AddBattletagScreen;
