import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	modalStyle: {
		flex:            1,
		alignItems:      "center",
		justifyContent:  "center",
		backgroundColor: `rgba(0,0,0,.6)`,
	},
	innerModalStyle: {
		padding:         13,
		backgroundColor: "white",
		borderRadius:    13,
	},
});

export default styles;
