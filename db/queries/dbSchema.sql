-- purge
DROP TABLE battletag;

-- battletag table
CREATE TABLE IF NOT EXISTS battletag (
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
)

-- datetime in sqlite is fucking stupid apparently
CREATE TRIGGER trigger_battletag_updated_at
AFTER
UPDATE ON battletag BEGIN
UPDATE battletag
SET updated_at = DATETIME('now', 'localtime')
WHERE rowid == NEW.rowid;
END;

--cascade on delete, some variation of this
FOREIGN KEY (group_id) REFERENCES groups (group_id) ON DELETE CASCADE ON UPDATE NO ACTION;

-- insert clause
INSERT INTO battletag (id, isPublic, level, name, platform, playerLevel, portrait, urlName)
VALUES 
(value1, value2,...)