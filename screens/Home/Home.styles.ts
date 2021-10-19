import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	searchIcon:        { color: "black", }, 
	searchBox:         { borderWidth: 1, },
	elementPadding:    { padding: 10, },
	minHeight:         { minHeight: 50 , },
	errorText:         { color: theme.palette.common.error , },
	scrollViewPadding: { marginTop: theme.spacing.element , },
	item:              { margin: theme.spacing.element, },
});

export default styles;
