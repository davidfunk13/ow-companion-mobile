import Navigation from "./components/Navigation/Navigation";
import { Provider, } from "react-redux";
import { store, } from "./redux/store";
import React, { FC, } from "react";

interface IAppProps {

}

const App: FC<IAppProps> = () => {

	return (
		<Provider store={store}>	
			<Navigation />
		</Provider>

	);
};

export default App;

