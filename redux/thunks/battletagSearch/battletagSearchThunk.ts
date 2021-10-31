import Battletag from "../../../models/Battletag";
import axios from "axios";
import { createAsyncThunk, } from "@reduxjs/toolkit";

const battletagSearch = createAsyncThunk("battletagSearch/search",
	async (searchValue: string, { rejectWithValue, }) => {
		const apiString = "https://playoverwatch.com/en-us/search/account-by-name/";

		const uri = encodeURIComponent(searchValue);

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
