import AppScreen from "../../components/AppScreen/AppScreen";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import battletagSearch from "../../redux/thunks/battletagSearch/battletagSearchThunk";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, Text, } from "react-native-elements";
import { NavigationProp, useFocusEffect, } from "@react-navigation/core";
import React, { useCallback, useState, } from "react";
import { ScrollView, View, } from "react-native";
import {
	resetBattletagSearchSlice,
	selectBattletagSearchBattletags,
	selectBattletagSearchError,
	selectBattletagSearchLoading,
} from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import { getData, setObjectValue, } from "../db";

interface IAddBattletagScreenProps {
	navigation?: NavigationProp<never, never>
}

const initialValues: BattletagSearchInput = { battletag: "", };

const AddBattletagScreen: React.FC<IAddBattletagScreenProps> = () => {
	const dispatch = useAppDispatch();

	const searchLoading = useAppSelector(selectBattletagSearchLoading);

	const searchError = useAppSelector(selectBattletagSearchError);

	const battletags = useAppSelector(selectBattletagSearchBattletags);

	const [ state, setState , ] = useState();

	useFocusEffect(
		useCallback(() => {	
			return () => {
				dispatch(resetBattletagSearchSlice());
			};
		}, [ ])
	);

	return (
		<AppScreen>
			<Text h1 style={styles.elementPadding}>Add Battletag</Text>
			<Text style={styles.elementPadding}>Add a new battletag to your app to track.</Text>
			<Text style={styles.elementPadding}>CURRENT: {state}</Text>
			<Button onPress={() => {
				const data = getData();

				data.then(stuff => console.log(stuff));
			}} title={"sdfsdf"}/>
			{!!searchError && <Text style={{
				...styles.errorText,
				...styles.elementPadding,
			}}>{searchError}</Text>}
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
				{battletags.map(battletag => {
					return <Button onPress={() => setObjectValue(battletag)} key={battletag.id} title={battletag.name}/>;
				})}
			</ScrollView>
		</AppScreen>
	);
};

export default AddBattletagScreen;
