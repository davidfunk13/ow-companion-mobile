import Battletag from "../../../models/Battletag";
import { createAsyncThunk, } from "@reduxjs/toolkit";

const battletagSearch = createAsyncThunk<Battletag[], string, { rejectValue: string }>(
	"battletagSearch/search", async (battletag, { rejectWithValue, }) => {
		const apiString = "https://playoverwatch.com/en-us/search/account-by-name/";

		const uri = encodeURIComponent(battletag);

		const response = await fetch(encodeURI(apiString + uri));

		if (response.status !== 200) {
			return rejectWithValue(`Something went wrong. (${response.status})`);
		}

		const data: Battletag[] = await response.json();
		
		if (!data || !data.length) {
			return rejectWithValue("No Battletags found. Please Try again.");
		}

		return data;
	});

export default battletagSearch;
