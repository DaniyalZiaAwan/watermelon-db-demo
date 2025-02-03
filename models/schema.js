import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const mySchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'products',
            columns: [
                { name: 'name', type: 'string' },
                { name: 'description', type: 'string', isOptional: true },
                { name: 'price', type: 'number' },
                { name: 'poster', type: 'string', isOptional: true },
                { name: 'is_popular', type: 'boolean', isOptional: true },
            ],
        }),
        tableSchema({
            name: 'reviews',
            columns: [
                { name: 'product_id', type: 'string', isIndexed: true },
                { name: 'content', type: 'string' },
            ],
        }),
    ],
});

