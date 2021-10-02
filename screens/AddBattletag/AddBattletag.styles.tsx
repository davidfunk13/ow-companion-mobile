import { StyleSheet, } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
	searchIcon:        { color: "black", }, 
	searchBox:         { borderWidth: 1, },
	elementPadding:    { marginBottom: theme.spacing.element, },
	errorText:         { color: theme.palette.common.error , },
	scrollViewPadding: { marginTop: theme.spacing.element , },
	item:              { margin: theme.spacing.element, },
});

export default styles;
