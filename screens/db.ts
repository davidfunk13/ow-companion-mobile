import AsyncStorage from "@react-native-async-storage/async-storage";

export const setObjectValue = async (value: any) => {
	try {
		const jsonValue = JSON.stringify(value);

		await AsyncStorage.setItem("key", jsonValue);
	} catch (e) {
		// save error
	}
  
	console.log("Done.");
};

export const getData = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem("key").then(val => val);
		
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
	}
};
  
