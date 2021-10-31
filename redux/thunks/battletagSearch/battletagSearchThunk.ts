import Battletag from "../../../models/Battletag";
import axios from "axios";
import { createAsyncThunk, } from "@reduxjs/toolkit";

const battletagSearch = createAsyncThunk("battletagSearch/search",
	async (searchValue: string, { rejectWithValue, }) => {
		const response = await axios.get<Battletag[]>(`https://playoverwatch.com/en-us/search/account-by-name/${encodeURIComponent(searchValue)}`);

		if (response.status !== 200) {
			return rejectWithValue(`Something went wrong. (${response.status})`);
		}

		if (!response.data || !response.data.length) {
			return rejectWithValue("No Battletags found. Please Try again.");
		}

		return response.data;
	});

export default battletagSearch;
