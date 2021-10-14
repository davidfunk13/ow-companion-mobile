import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

db.transaction((tx) => {
	tx.executeSql(
		"CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, value TEXT);"
	),() => "created table", () => "table existed";
});

const value = 1;

export const addThing = (thing: string) => {
	db.transaction(
		//multiple SQL operations looks like this.
		(tx) => {
			tx.executeSql("INSERT INTO items (value) VALUES (?)", [ thing, ]);

			tx.executeSql("SELECT * FROM items", [], (_, { rows, }) => console.log(JSON.stringify({
				message: "select statement, here's your shit.",
				rows,
			}))
			);
		},
		// error Callback,
		(err: any) => console.log("you fucked up", err),
		//success Callback
		() => console.log("you did it")
	);
};

export const getAllThings = () => {
	db.transaction((tx) => {
		tx.executeSql(
			`SELECT * FROM items;`,
			[],
			(_, { rows: { length, item, }, }) => console.log(length, item)
		);
	});
};
