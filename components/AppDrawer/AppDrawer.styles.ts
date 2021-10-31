import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	container:       { flex: 1, },
	headerContainer: {
		paddingTop:    20,
		paddingBottom: 20,
	},
	logoutIcon:     { padding: theme.spacing.xxs, },
	logoutButton:   { backgroundColor: theme.palette.common.error, },
	headerText:     { color: theme.palette.common.white, },
	headerTextBold: {
		color:    theme.palette.common.white,
		fontSize: 15, 
	},

});

export default styles;
