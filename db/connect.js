import fs from 'fs';
const sqlite3 = require('sqlite3').verbose();

export function getDBConnection() {
    if (fs.existsSync("./db/airlike.db")) {
        const conn = new sqlite3.Database("./db/airlike.db");
        conn.exec('PRAGMA foreign_keys=ON')
        return conn;
    } else {
        null;
    }
}

