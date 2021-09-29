
import Navigation from "./navigation/Navigation";
import { Provider, } from "react-redux";
import { SafeAreaProviderCompat, } from "@react-navigation/elements";
import { ThemeProvider, } from "react-native-elements";
import { store, } from "./redux/store";
import theme from "./constants/ElementsTheme";
import React, { FC, } from "react";

interface IAppProps {

}

const App: FC<IAppProps> = () => {

	return (
		<SafeAreaProviderCompat>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Navigation />
				</ThemeProvider>
			</Provider>	
		</SafeAreaProviderCompat>
	);
};

export default App;

