import AppDb from "../../../../db/db";
import Battletag from "../../../../models/Battletag";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import { insertBattletag, } from "../../../../db/queries/battletag";

const saveBattletagThunk = createAsyncThunk("battletag/save",
	async (battletag: Battletag, { rejectWithValue, }) => {
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
		
		return AppDb.makeTransaction(insertBattletag,
			[
				id,
				isPublic,
				level,
				name,
				platform,
				playerLevel,
				portrait,
				urlName, 
			])
			.then(() => console.log("Successfully created new Battletag"))
			.catch(err => {
				console.log(err);

				rejectWithValue({
					error:   JSON.stringify(err),
					message: "You blew it kind of.",
				});});
	});

export default saveBattletagThunk;
