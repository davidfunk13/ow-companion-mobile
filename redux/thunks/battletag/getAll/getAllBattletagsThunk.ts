import { createAsyncThunk, } from "@reduxjs/toolkit";
import { SQLResultSet, } from "expo-sqlite";
import db from "../../../../db/db";
import { getAllBattletags, } from "../../../../db/queries/battletag";
import Battletag from "../../../../models/Battletag";

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
			() => results[0].rows.length ? resolve(processRows(results)) : reject("No battletags Found."));
		});

		return poo.then(data => data as Battletag[])
			.catch(err => rejectWithValue({
				error:   err,
				message: "You blew it kind of." , 
			}));
	});

export default getAllBattletagsThunk;
