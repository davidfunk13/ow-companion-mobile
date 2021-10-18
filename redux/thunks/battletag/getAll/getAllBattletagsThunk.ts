import Battletag from "../../../../models/Battletag";
import SQLResponse from "../../../../models/responses/SQLResponse";
import { createAsyncThunk, isFulfilled, } from "@reduxjs/toolkit";
import db from "../../../../db/db";
import { getAllBattletags, } from "../../../../db/queries/battletag";
import { Platform, } from "react-native";
import { setBattletags, } from "../../../reducers/battletagsSlice/battletagsSlice";
import { transactionAsync, } from "../../../../utils/transactionAsync";

const getAllBattletagsThunk = createAsyncThunk(
	"battletags/getAll",
	async (_, { rejectWithValue, fulfillWithValue, dispatch, }) => {

		const item = await transactionAsync([ { sql: getAllBattletags , } , ]);

		console.log({ fuckYou: item , });
		
		return item;
	});

export default getAllBattletagsThunk;
