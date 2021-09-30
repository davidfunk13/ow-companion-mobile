import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	container:       { flex: 1 , },
	headerContainer: {
		flexDirection:   "row",
		justifyContent:  "space-between",
		alignItems:      "center",
		backgroundColor: "#2C3458",
		marginBottom:    50,
		height:          145,
	},
	header: {
		height:        128,
		flexDirection: "row",
		alignItems:    "center",
	},
	headerText:       { color: theme.palette.common.white, },
	touchableOpacity: {
		position:        "absolute",
		right:           0,
		left:            0,
		bottom:          500,
		backgroundColor: "#f6f6f6",
		padding:         20,
	},
});

export default styles;
