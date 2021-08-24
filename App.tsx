import { AppNavigator, } from "./navigation/app.navigator";
import { AppRoute, } from "./navigation/app-routes";
import { EvaIconsPack, } from "@ui-kitten/eva-icons";
import { NavigationContainer, } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider, } from "react-native-safe-area-context";
import { ApplicationProvider, IconRegistry, } from "@ui-kitten/components";
import { light, mapping, } from "@eva-design/eva";

const App = () => {
	// This value is used to determine the initial screen
	const isAuthorized = false;

	return (
		<React.Fragment>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider
				mapping={mapping}
				theme={light}>
				<SafeAreaProvider>
					<NavigationContainer>
						<AppNavigator 
							initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH} 
						/>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApplicationProvider>
		</React.Fragment>
	);
};

export default App;

