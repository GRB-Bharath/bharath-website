import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from "@shared/schema";
import path from 'path';

// SQLITE_DB_PATH is set to /tmp in render.yaml (writable on Render's ephemeral FS)
// Fall back to process.cwd() for local development
const dbDir = process.env.SQLITE_DB_PATH || process.cwd();
const dbPath = path.join(dbDir, 'portfolio.db');
console.log(`[DB] Using SQLite database at: ${dbPath}`);
const sqlite = new Database(dbPath);

// Enable foreign keys
sqlite.pragma('foreign_keys = ON');

export const db = drizzle({ client: sqlite, schema });

// Initialize tables if they don't exist
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
  );
`);

// Create default admin user (username: admin, password: admin123)
const defaultAdmin = {
  username: 'admin',
  password: 'admin123' // In production, this should be hashed
};

try {
  sqlite.prepare(`
    INSERT OR IGNORE INTO users (username, password) 
    VALUES (?, ?)
  `).run(defaultAdmin.username, defaultAdmin.password);
} catch (error) {
  // User might already exist
}