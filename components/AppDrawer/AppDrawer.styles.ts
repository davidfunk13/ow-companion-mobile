import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	container:       { flex: 1, },
	headerContainer: {
		flexDirection:   "row",
		justifyContent:  "space-between",
		alignItems:      "center",
		backgroundColor: theme.palette.overwatchPurple,
		marginBottom:    50,
		height:          145,
	},
	header: {
		height:        128,
		flexDirection: "row",
		alignItems:    "center",
	},
	logoutIcon:   { padding: theme.spacing.xxs, },
	logoutButton: { backgroundColor: theme.palette.common.error, },
	headerText:   { color: theme.palette.common.white, },

});

export default styles;
