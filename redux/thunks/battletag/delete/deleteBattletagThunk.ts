import AppDb from "../../../../db/db";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import { deleteOneBattletagById, } from "../../../../db/queries/battletag";

const deleteBattletagThunk = createAsyncThunk("battletags/deleteOne",
	async (id:number, { rejectWithValue, }) => {
		return AppDb
			.makeTransaction(deleteOneBattletagById, [ id, ])
			.then(data => data)
			.catch(err => rejectWithValue({
				error:   err,
				message: "You blew it kind of.",
			}));
	});

export default deleteBattletagThunk;
