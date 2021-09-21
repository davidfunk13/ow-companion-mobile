import Navigation from "./components/Navigation/Navigation";
import { Provider, } from "react-redux";
import { ThemeProvider, } from "react-native-elements";
import { store, } from "./redux/store";
import theme from "./constants/Theme";
import React, { FC, } from "react";

interface IAppProps {

}

const App: FC<IAppProps> = () => {

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Navigation />
			</ThemeProvider>
		</Provider>	
	);
};

export default App;

