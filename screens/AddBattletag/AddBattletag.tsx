import AppDb from "../../db/db";
import AppScreen from "../../components/AppScreen/AppScreen";
import Battletag from "../../models/Battletag";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput";
import { Card, } from "react-native-elements/dist/card/Card";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import battletagSearch from "../../redux/thunks/battletagSearch/battletagSearchThunk";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, ListItem, Text, } from "react-native-elements";
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
import getAllBattletagsThunk from "../../redux/thunks/battletag/getAll/getAllBattletagsThunk";
import saveBattletagThunk from "../../redux/thunks/battletag/save/saveBattletagThunk";
import { selectBattletags, selectBattletagsLoading, } from "../../redux/reducers/battletagsSlice/battletagsSlice";

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
			<Text h1 style={styles.elementPadding}>{battletagsLoading && "loading..."}</Text>
			<Text style={styles.elementPadding}>Add a new battletag to your app to track.</Text>
			<Text style={styles.elementPadding}>CURRENT: </Text>
			<Button onPress={() => dispatch(getAllBattletagsThunk())} title={"get things"}/>
			<ScrollView style={styles.elementPadding}>
				<Card >
					{battletags.map((item: Battletag, i) => { 
						return <ListItem key={i} bottomDivider>
							<Text>{item.name}</Text>
							<Button onPress={() => console.log("fuck you.")}title={"Delete"}/>
						</ListItem>; 
					})}
				</Card>
			</ScrollView>
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
				{searchBattletags.map(battletag => {
					return <Button onPress={() => dispatch(saveBattletagThunk(battletag))} key={battletag.id} title={battletag.name}/>;
				})}
			</ScrollView>
		</AppScreen>
	);
};

export default AddBattletagScreen;
