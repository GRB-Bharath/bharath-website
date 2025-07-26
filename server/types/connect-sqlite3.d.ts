declare module 'connect-sqlite3' {
  import { Store } from 'express-session';
  import { SessionOptions } from 'express-session';
  export default function(SQLite: any): typeof Store;
}
