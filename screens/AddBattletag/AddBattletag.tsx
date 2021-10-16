import AppDb from "../../db/db";
import AppScreen from "../../components/AppScreen/AppScreen";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView, View, } from "react-native";
import battletagSearch from "../../redux/thunks/battletagSearch/battletagSearchThunk";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, ListItem, Text, } from "react-native-elements";
import { NavigationProp, useFocusEffect, } from "@react-navigation/core";
import React, { useCallback, useState, } from "react";
import {
	resetBattletagSearchSlice,
	selectBattletagSearchBattletags,
	selectBattletagSearchError,
	selectBattletagSearchLoading,
} from "../../redux/reducers/battletagSearchSlice/battletagSearchSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import Battletag from "../../models/Battletag";
import MyCard from "../../components/Card/Card";
import { Card, } from "react-native-elements/dist/card/Card";

interface IAddBattletagScreenProps {
	navigation?: NavigationProp<never, never>
}

const initialValues: BattletagSearchInput = { battletag: "", };

const AddBattletagScreen: React.FC<IAddBattletagScreenProps> = () => {
	const dispatch = useAppDispatch();

	const searchLoading = useAppSelector(selectBattletagSearchLoading);

	const searchError = useAppSelector(selectBattletagSearchError);

	const battletags = useAppSelector(selectBattletagSearchBattletags);

	const [ state, setState , ] = useState<Battletag[]>([]);

	useFocusEffect(
		useCallback(() => {	
			return () => {
				dispatch(resetBattletagSearchSlice());
			};
		}, [ ])
	);

	function stupidAssCb(values: any){
		console.log(values);

		setState(values._array);
	}

	return (
		<AppScreen>
			<Text h1 style={styles.elementPadding}>Add Battletag</Text>
			<Text style={styles.elementPadding}>Add a new battletag to your app to track.</Text>
			<Text style={styles.elementPadding}>CURRENT: </Text>
			<Button onPress={() => AppDb.getAllBattletags(stupidAssCb)} title={"get things"}/>
			<ScrollView style={styles.elementPadding}>
				<Card >
					{state.map((item: Battletag, i) => { 
						return <ListItem key={i} bottomDivider>
							<Text>{item.name}</Text>
							<Button onPress={() => AppDb.deleteOneBattletag(item.id, stupidAssCb)} title={"Delete"}/>
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
				{battletags.map(battletag => {
					return <Button onPress={() => AppDb.saveBattletag(battletag)} key={battletag.id} title={battletag.name}/>;
				})}
			</ScrollView>
		</AppScreen>
	);
};

export default AddBattletagScreen;
