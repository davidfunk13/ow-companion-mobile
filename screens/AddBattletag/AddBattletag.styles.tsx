import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	searchIcon:     { color: "black", }, 
	searchBox:      { borderWidth: 1, },
	headingPadding: { marginBottom: theme.spacing.element , },
	errorText:      { color: theme.palette.common.error , },
});

export default styles;
