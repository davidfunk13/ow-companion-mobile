import theme from "../theme";

export default {
	light: {
		text:            theme.palette.common.black,
		background:      theme.palette.common.white,
		tint:            theme.palette.tintColorLight,
		tabIconDefault:  "#ccc",
		tabIconSelected: theme.palette.tintColorLight,
	},
	dark: {
		text:            theme.palette.common.white,
		background:      theme.palette.common.black,
		tint:            theme.palette.tintColorDark,
		tabIconDefault:  "#ccc",
		tabIconSelected: theme.palette.tintColorDark,
	},
};
