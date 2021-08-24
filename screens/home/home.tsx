import { HomeScreenProps, } from "../../navigation/home.navigator";
import React from "react";
import { StyleSheet, } from "react-native";
import { Toolbar, } from "../../components/toolbar.component";
import { Divider, Layout, Text, } from "@ui-kitten/components";
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset, } from "../../components/safe-area-layout.component";

export const HomeScreen = (props: HomeScreenProps): SafeAreaLayoutElement => (
	<SafeAreaLayout
		style={styles.safeArea}
		insets={SaveAreaInset.TOP}>
		<Toolbar
			title={"HOME"}
			onBackPress={props.navigation.goBack}
		/>
		<Divider />
		<Layout style={styles.container}>
			<Text category={"h1"}>
				HOME
			</Text>
		</Layout>
	</SafeAreaLayout>
);

const styles = StyleSheet.create({
	safeArea:  { flex: 1, },
	container: {
		flex:           1,
		justifyContent: "center",
		alignItems:     "center",
	},
});
