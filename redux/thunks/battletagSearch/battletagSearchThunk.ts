import Battletag from "../../../models/Battletag";
import axios from "axios";
import { createAsyncThunk, } from "@reduxjs/toolkit";

const battletagSearch = createAsyncThunk<Battletag[], string, { rejectValue: string }>("battletagSearch/search", async (battletag, { rejectWithValue, }) => {
	const apiString = "https://playoverwatch.com/en-us/search/account-by-name/";

	const uri = encodeURIComponent(battletag);

	const response = await axios.get<Battletag[]>(encodeURI(apiString + uri));

	if (response.status !== 200) {
		return rejectWithValue(`Something went wrong. (${response.status})`);
	}
		
	if (!response.data || !response.data.length) {
		return rejectWithValue("No Battletags found. Please Try again.");
	}

	return response.data;
});

export default battletagSearch;
