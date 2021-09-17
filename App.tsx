import AppContent from "./AppContent";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";
import { IconRegistry, } from "@ui-kitten/components";
import { Provider, } from "react-redux";
import { store, } from "./redux/store";
import React, { FC, } from "react";

interface IAppProps {

}

const App: FC<IAppProps> = () => {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<Provider store={store}>
				<AppContent/>
			</Provider>
		</>
	);
};

export default App;

