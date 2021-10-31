export const initDb = `CREATE TABLE IF NOT EXISTS battletag (
    id INTEGER PRIMARY KEY,
    isPublic INTEGER check(isPublic = 0 or isPublic = 1),
    level INTEGER NOT NULL,
    name TEXT NOT NULL,
    platform TEXT NOT NULL,
    playerLevel INTEGER NOT NULL,
    portrait TEXT NOT NULL,
    urlName TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
    updated_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
)`;
