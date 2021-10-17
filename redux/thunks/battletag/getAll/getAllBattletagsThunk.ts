import axios from "axios";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import db from "../../../../db/db";
import { getAllBattletags, } from "../../../../db/queries/battletag";
import Battletag from "../../../../models/Battletag";

const getAllBattletagsThunk = createAsyncThunk("battletag/getAll", async (_, { rejectWithValue, }) => {
	let battArr: Battletag[] = [];

	console.log("Fuck you");

	db.transaction(
		(tx) => {
			tx.executeSql(getAllBattletags, [], (transactionObject, result) => {
				console.log(result);

				battArr = result.rows._array;
			});
		},
		(err: unknown) => console.log("Get ting all the battletags fucked up", err),
		() => console.log("get all battletags successfull.")
	);

	console.log({ battArr, });
	// if (response.status !== 200) {
	// 	return rejectWithValue(`Something went wrong. (${response.status})`);
	// }
		
	// if (!response.data || !response.data.length) {
	// 	return rejectWithValue("No Battletags found. Please Try again.");
	// }

	return battArr;
});

export default getAllBattletagsThunk;
