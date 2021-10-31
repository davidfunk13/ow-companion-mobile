import { StyleSheet, } from "react-native";

const styles = StyleSheet.create({
	deleteButton: {
		minWidth:        "45%",
		backgroundColor: "red", 
	},
	cancelButton:   { minWidth: "45%", },
	overlaySpacing: {
		margin:  40,
		padding: 20, 
	},
	dividerSpacing: {
		paddingTop:    10,
		paddingBottom: 20, 
	},
	buttonContainer: {
		paddingTop:     20,
		paddingBottom:  20,
		display:        "flex",
		flexDirection:  "row", 
		justifyContent: "space-between",
	},
	showEmptyStateContainer: {
		padding:       20,
		display:       "flex",
		flexDirection: "row",
	},
	cardContainer: { padding: 0, },
});

export default styles;
