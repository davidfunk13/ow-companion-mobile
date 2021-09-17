import * as eva from "@eva-design/eva";
import AppNavigator from "./navigation/AppNavigator/AppNavigator";
import { ApplicationProvider, } from "@ui-kitten/components";
import { selectTheme, } from "./redux/reducers/theme/themeSlice";
import { useAppSelector, } from "./redux/hooks";
import React,{ FC , } from "react";

interface IAppContentProps {

}

const AppContent: FC<IAppContentProps> = () => {
	const themes = {
		light: eva.light,
		dark:  eva.dark ,
	};

	const theme = useAppSelector(selectTheme);
	
	return (
		<ApplicationProvider {...eva} theme={themes[theme]}>
			<AppNavigator />
		</ApplicationProvider>
	);
};

export default AppContent
;
