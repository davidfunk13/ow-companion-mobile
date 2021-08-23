import * as eva from "@eva-design/eva";
import AppNavigator from "./navigation/AppNavigator/AppNavigator";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";
import React from "react";
import { ApplicationProvider, IconRegistry, } from "@ui-kitten/components";

const App = () => {
	return (
		<>
			<IconRegistry icons={EvaIconsPack}/>
			<ApplicationProvider {...eva} theme={eva.light}>
				<AppNavigator/>
			</ApplicationProvider>
		</>
	);
};

export default App;
