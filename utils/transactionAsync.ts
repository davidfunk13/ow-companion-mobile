import { ResultSet, SQLResultSet, } from "expo-sqlite";
import db from "../db/db";
import Battletag from "../models/Battletag";

interface SQLQuery {
    sql: string,
    args?: unknown[]

}

export function transactionAsync(queries: SQLQuery[]): Promise<any> {
	return new Promise( (resolve, reject) => {
		const results: SQLResultSet[] = [];

		db.transaction((tx) => {
			for (let i=0; i<queries.length; i++) {
				const query = queries[i];

				tx.executeSql(query.sql, query.args, (_, resSet) => {
					results.push(resSet);
				}, (err) => {
					reject(err);

					return true;
				});
			}
		}, err => reject(err), () => {
			console.log("transaction results", results);

			const rows = results[0].rows;

			resolve((rows as unknown as {_array: any[] })._array);
		});
	});
}
