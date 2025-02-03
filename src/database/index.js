import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { mySchema } from '../models/schema';
import Product from '../models/Product';
import Review from '../models/Review';

// Create the adapter
const adapter = new SQLiteAdapter({
  schema: mySchema,
  dbName: 'WatermelonDemo',
});

// Create the database
const database = new Database({
  adapter,
  modelClasses: [Product, Review],
});

export default database;