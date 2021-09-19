import { FC, } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { ImageBackground, SafeAreaView , } from "react-native";

interface IAppScreenProps{
    
}

const AppScreen: FC<IAppScreenProps> = ({ children , }) => {
	return (
		<SafeAreaView >
			<ImageBackground
				resizeMode={"cover"} 
				source={require("../../assets/images/ow.jpg")} 
				style={{
					width:  "100%" ,
					height: "100%",
				}}
			>
				{children}
			</ImageBackground>
		</SafeAreaView>
	);
};

export default AppScreen;
