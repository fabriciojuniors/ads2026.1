import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('test.db')

export const migrateDbIfNeeded = async (db: SQLite.SQLiteDatabase) => {
await db.execAsync(`
    CREATE TABLE IF NOT EXISTS USUARIOS(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    );`);
}