export const insertBattletag = `INSERT INTO battletag (id, isPublic, level, name, platform, playerLevel, portrait, urlName) VALUES (?,?,?,?,?,?,?,?)`;
export const getAllBattletags = `SELECT * FROM battletag;`;
export const deleteOneBattletagById = `DELETE FROM battletag WHERE id = ?;`;
