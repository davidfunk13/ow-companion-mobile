import AppScreen from "../../components/AppScreen/AppScreen";
import React from "react";
import { TestComponent, } from "../../components/TestComponent/TestComponent";
import { Input, Text , } from "react-native-elements";
import { selectStatus, } from "../../redux/reducers/test/testSlice";
import { useAppSelector, } from "../../redux/hooks";
import { Button, NativeSyntheticEvent, NativeTouchEvent, TextInput, View, } from "react-native";
import { Formik, } from "formik";
import { TouchableOpacity, } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, } from "react";

interface IAddBattletagScreenProps {
	navigation: any
}

const AddBattletagScreen = ({ navigation, }: IAddBattletagScreenProps) => {
	const isLoading = useAppSelector(selectStatus);

	const [ state, setState , ] = useState<any>();
	// const navigateDetails = () => {
	// 	navigation.navigate("Details");
	// };

	return (
		<AppScreen>
			<Text h1>Add Battletag</Text>
			<Formik
				initialValues={{ email: "", }}
				onSubmit={values => console.log({
					values,
					message: "fuuuuuuucck you." ,
				})}
			>
				{({ handleChange, handleBlur, handleSubmit, values, }) => (
					<View>
						{/* <TouchableOpacity style={{ height: 40 , }}> */}
						<TextInput
							onChangeText={handleChange("email")}
							onBlur={handleBlur("email")}
							value={values.email}
						/>
						{/* </TouchableOpacity> */}
						<Input
							placeholder={"BASIC INPUT"}
						/>

						<Input
							placeholder={"INPUT WITH ICON"}
							leftIcon={{
								type: "font-awesome",
								name: "chevron-left", 
							}}
						/>

						<Input
							placeholder={"Search for Battletag."}
							leftIcon={
								<Icon
									name={"user"}
									size={16}
									color={"grey"}
								/>
							}
						/>

						<Input
							placeholder={"Comment"}
							leftIcon={{
								type: "font-awesome",
								name: "comment", 
							}}
							// style={styles}
							onChangeText={value => setState({ comment: value, })}
						/>

						<Input
							placeholder={"INPUT WITH ERROR MESSAGE"}
							errorStyle={{ color: "red", }}
							errorMessage={"ENTER A VALID ERROR HERE"}
						/>

						<Input placeholder={"Password"} secureTextEntry={true} />
						<Button onPress={() => handleSubmit()} title={"Submit"} />
					</View>
				)}
			</Formik>
		</AppScreen>
	);
};

export default AddBattletagScreen;
