import * as SQLite from "expo-sqlite";
import Battletag from "../models/Battletag";
import { initDb, } from "./initDb";
import { deleteOneBattletagById, getAllBattletags, insertBattletag, } from "./queries/battletag";

const db = SQLite.openDatabase("db.db");

//check to see if the table exists on init, if not create it
db.transaction(
	tx => tx.executeSql(initDb),
	(err: unknown) => console.log("Init Fucked up", err),
	() => console.log("Init successful.")
);

// class OwCompanionDB {
// 	saveBattletag({ id, isPublic, level, name, platform, playerLevel, portrait, urlName, }: Battletag) {
// db.transaction(
// 	(tx) => {
// 		tx.executeSql(
// 			insertBattletag,
// 			[
// 				id,
// 				isPublic,
// 				level,
// 				name,
// 				platform,
// 				playerLevel,
// 				portrait,
// 				urlName, 
// 			]
// 		);
// 	},
// 	(err: unknown) => console.log("you fucked up", err),
// 	() => console.log("Battletag successfully inserted.")
// );
// 	}

// 	getAllBattletags(cb: (battletagArr: any[])=>any[]) {
// 		db.transaction(
// 			(tx) => {
// 				tx.executeSql(getAllBattletags, [], (transactionObject, result) => {
// 					console.log(result);

// 					return cb(result.rows as unknown as any[]);
// 				});
// 			},
// 			(err: unknown) => console.log("Get ting all the battletags fucked up", err),
// 			() => console.log("get all battletags successfull.")
// 		);
// 	}

// 	deleteOneBattletag(id: number, cb: { (values: unknown): void; (arg0: SQLite.SQLResultSet): void; }) {
// 		db.transaction(
// 			(tx) => {
// 				tx.executeSql(
// 					deleteOneBattletagById,
// 					[ id, ],
// 					(transactionObject, result) => {
// 						console.log(result);
// 					});

// 				tx.executeSql(getAllBattletags, [], (transactionObject, result) => {
// 					console.log(result);
	
// 					cb(result.rows);
// 				});
// 			},
// 			(err: unknown) => console.log("deleting one battletag fucked up.", err),
// 			() => console.log("deleting one battletag was successful.")
// 		);
// 	}
// }

// const AppDb = new OwCompanionDB();

export default db;
