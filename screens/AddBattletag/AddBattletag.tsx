import AppScreen from "../../components/AppScreen/AppScreen";
import BattletagSearchInput from "../../models/Inputs/BattletagSearchInput/BattletagSearchInput";
import { Formik, } from "formik";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationProp, } from "@react-navigation/core";
import React from "react";
import { View, } from "react-native";
import styles from "./AddBattletag.styles";
import validationSchema from "./validationSchema";
import { Button, Input, Text, } from "react-native-elements";

interface IAddBattletagScreenProps {
	navigation?: NavigationProp<never, never>
}

const initialValues: BattletagSearchInput = { battletag: "", };

const AddBattletagScreen: React.FC<IAddBattletagScreenProps> = () => {
	return (
		<AppScreen>
			<Text h1 style={styles.headingPadding}>Add Battletag</Text>
			<Text>Add a new battletag to your app to track.</Text>
			<Formik
				validateOnBlur={false}
				validateOnMount={false}
				validateOnChange={false}
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={values => console.log(values)}
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
						<Button title={"Submit"} onPress={() => handleSubmit()}/>
					</>
				)}
			</Formik>
		</AppScreen>
	);
};

export default AddBattletagScreen;
