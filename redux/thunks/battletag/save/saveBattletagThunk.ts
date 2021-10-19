import Battletag from "../../../../models/Battletag";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import db from "../../../../db/db";
import { getAllBattletags, insertBattletag, } from "../../../../db/queries/battletag";

const saveBattletagThunk = createAsyncThunk("battletag/save", async (battletag: Battletag, { rejectWithValue, }) => {
	const {
		id,
		isPublic,
		level,
		name,
		platform,
		playerLevel,
		portrait,
		urlName, 
	} = battletag;

	db.transaction(
		(tx) => {
			tx.executeSql(
				insertBattletag,
				[
					id,
					isPublic,
					level,
					name,
					platform,
					playerLevel,
					portrait,
					urlName, 
				], (shit) => console.log({ shit, }) 
			);
		},
		(err: unknown) => {
			rejectWithValue("you fucked up: " + JSON.stringify(err));

			console.log("you fucked up", err);
		},
		() => console.log("Battletag successfully inserted.")
	);
});

export default saveBattletagThunk;
