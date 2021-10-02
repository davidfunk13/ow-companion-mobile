import AppScreen from "../../components/AppScreen/AppScreen";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationProp, } from "@react-navigation/core";
import { View, } from "react-native";
import battletagSearch from "../../redux/thunks/battletagSearch/battletagSearchThunk";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, Text, } from "react-native-elements";
import React, { useEffect , } from "react";
import { selectBattletagSearchBattletags, selectBattletagSearchError, selectBattletagSearchLoading, } from "../../redux/reducers/battletagSearchSlice/battletagSearch";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";
import theme from "../../theme";

interface IAddBattletagScreenProps {
	navigation?: NavigationProp<never, never>
}

const initialValues: BattletagSearchInput = { battletag: "", };

const AddBattletagScreen: React.FC<IAddBattletagScreenProps> = () => {
	const dispatch = useAppDispatch();

	const searchLoading = useAppSelector(selectBattletagSearchLoading);

	const searchError = useAppSelector(selectBattletagSearchError);

	const battletags = useAppSelector(selectBattletagSearchBattletags);
	
	return (
		<AppScreen>
			<Text h1 style={styles.headingPadding}>Add Battletag</Text>
			<Text>Add a new battletag to your app to track.</Text>
			{searchError && <Text style={styles.errorText}>{searchError}</Text>}
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

						<Button loading={searchLoading} title={"Submit"} onPress={() => handleSubmit()}/>
					</>
				)}
			</Formik>
			{battletags.map(battletag => {
				return	<View key={battletag.id} style={{ margin: 10 , }}>
					<Text>{battletag.name}</Text>
					<Text>{battletag.platform}</Text>
				</View>;
			})}
		</AppScreen>
	);
};

export default AddBattletagScreen;
