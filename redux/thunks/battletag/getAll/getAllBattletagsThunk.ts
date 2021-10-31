import Battletag from "../../../../models/Battletag";
import { SQLResultSet, } from "expo-sqlite";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import db from "../../../../db/db";
import { getAllBattletags, } from "../../../../db/queries/battletag";

function processRows(results: SQLResultSet[]) {
	const rows = results[0].rows;
	
	return (rows as unknown as { _array: Battletag[] })._array;
}

const getAllBattletagsThunk = createAsyncThunk(
	"battletags/getAll",
	async (_, { rejectWithValue, }) => {
		const poo = new Promise((resolve, reject) => {
			const results: SQLResultSet[] = [];

			db.transaction((tx) => {

				tx.executeSql(
					getAllBattletags,
					[],
					(_, resSet) => results.push(resSet),
					(err) => {
						reject(err);

						return true;
					});

			},
			(err: unknown) => reject(err),
			() => resolve(processRows(results)));
		});

		return poo.then(data => data as Battletag[])
			.catch(err => rejectWithValue({
				error:   err,
				message: "You blew it kind of." , 
			}));
	});

export default getAllBattletagsThunk;
