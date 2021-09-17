import * as eva from "@eva-design/eva";
import AppNavigator from "./navigation/AppNavigator/AppNavigator";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";
import { Provider, } from "react-redux";
import { store, } from "./redux/store";
import { ApplicationProvider, IconRegistry, } from "@ui-kitten/components";
import React, { FC, } from "react";

interface IAppProps {

}

const App: FC<IAppProps> = () => {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<Provider store={store}>
				<ApplicationProvider {...eva} theme={eva.dark}>
					<AppNavigator />
				</ApplicationProvider>
			</Provider>
		</>
	);
};

export default App;
