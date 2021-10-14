import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

db.transaction((tx) => {
	tx.executeSql(
		"CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, value TEXT);"
	), () => "created table", () => "table existed";
});

interface Row {
	length: number
	_array: unknown[]
}

interface SQLResult {
	insertId: number
	rows: Row
	rowsAffected: number
}

class OwCompanionDB {
	saveBattletag(thing: string) {
		db.transaction(
			//multiple SQL operations looks like this.
			(tx) => {
				tx.executeSql("INSERT INTO items (value) VALUES (?)", [ thing, ]);

				// tx.executeSql("SELECT * FROM items", [], (_, { rows, }) => console.log(JSON.stringify({
				// 	message: "select statement, here's your shit.",
				// 	rows,
				// }))
				// );
			},
			// error Callback,
			(err: any) => console.log("you fucked up", err),
			//success Callback
			() => console.log("you did it")
		);
	}

	getAllBattletags(whyDoINeedThisCb: { (values: any): void; (arg0: SQLite.SQLResultSet): void; }) {

		db.transaction((tx) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			tx.executeSql(`SELECT * FROM items;`, [], (transactionObject, result) => whyDoINeedThisCb(result.rows));
		});

	}
}

const AppDb = new OwCompanionDB();

export default AppDb;
