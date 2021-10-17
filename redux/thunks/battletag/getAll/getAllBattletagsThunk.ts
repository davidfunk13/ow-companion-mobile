import axios from "axios";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import db from "../../../../db/db";
import { getAllBattletags, } from "../../../../db/queries/battletag";
import Battletag from "../../../../models/Battletag";



// DO IT THIS WAY AND JUST DISPATCH YOUR OWN SUCCESS AND FAILURE AND LOADING ACTIONS
// Ditch createAsyncThunk [after trying some async await reassignment stuff with old setup.] as last resort.
// export function fetchGroupMeta() {
// 	return (dispatch) => {
// 	  dispatch(getGroupMeta());
// 	  return db.transaction(txn => {
// 		txn.executeSql(
// 		  'SELECT * FROM group_meta',
// 		  [],
// 		  (_, result) => {
// 			console.log('Result', result);
// 			return dispatch(getGroupMetaSuccess(['fake', 'data']));
// 		  },
// 		  (_, error) => {
// 			console.log('Error', error);
// 			return dispatch(getGroupMetaFailure(error));
// 		  }
// 		);
// 	  });
// 	};

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
  }