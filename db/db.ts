import * as SQLite from "expo-sqlite";
import Battletag from "../models/Battletag";
import { SQLResultSet, } from "expo-sqlite";
import { initDb, } from "./initDb";

const db = SQLite.openDatabase("db.db");

class OwCompanionDB {
//You should really, really make a thunk for this too probably to better deal with errors.
	init(){
		db.transaction(
			tx => tx.executeSql(initDb),
			(err: unknown) => console.log("Init Fucked up", err),
			() => console.log("Init successful.")
		);
	}

	processRows(results: SQLResultSet){
		const rows = results.rows;
		
		return (rows as unknown as { _array: Battletag[] })._array;
	}

	makeTransaction(query: string, args: unknown[] = []){
		return new Promise((resolve, reject) => {
			let results: SQLResultSet;

			db.transaction((tx) => {
				tx.executeSql(
					query,
					args,
					(_, resSet) => results = resSet,
					(err) => {
						reject(err);

						return true;
					});

			},
			(err: unknown) => reject(err),
			() => resolve(this.processRows(results)));
		});
	}
}

const AppDb = new OwCompanionDB();

//You should really, really make a thunk for this too probably to better deal with errors.
AppDb.init();

export default AppDb;
