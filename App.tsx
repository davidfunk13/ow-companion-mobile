import * as eva from "@eva-design/eva";
import AppNavigator from "./navigation/AppNavigator/AppNavigator";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";
import { Provider, } from "react-redux";
import React from "react";
import { store, } from "./redux/store";
import { ApplicationProvider, IconRegistry, } from "@ui-kitten/components";

const App = () => {
	return (
		<Provider store={store}>
			<IconRegistry icons={EvaIconsPack}/>
			<ApplicationProvider {...eva} theme={eva.light}>
				<AppNavigator/>
			</ApplicationProvider>
		</Provider>
	);
};

export default App;
