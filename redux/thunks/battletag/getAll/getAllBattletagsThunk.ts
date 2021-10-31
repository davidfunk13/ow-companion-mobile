import AppDb from "../../../../db/db";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import { getAllBattletags, } from "../../../../db/queries/battletag";

const getAllBattletagsThunk = createAsyncThunk(
	"battletags/getAll",
	async (_, { rejectWithValue, }) => {
		return AppDb
			.makeTransaction(getAllBattletags)
			.then(data => data)
			.catch(err => rejectWithValue({
				error:   err,
				message: "You blew it kind of.",
			}));
	});

export default getAllBattletagsThunk;
