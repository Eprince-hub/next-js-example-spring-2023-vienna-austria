import { Sql } from 'postgres';

export const animals = [
  { id: 1, name: 'gigi', type: 'cat', object: 'rat' },
  { id: 2, name: 'freddy', type: 'dog', object: 'biscuit' },
  { id: 3, name: 'bob', type: 'trashpanda', object: 'candy' },
  { id: 4, name: 'nagini', type: 'snake', object: 'band' },
  { id: 5, name: 'kunfu', type: 'panda', object: 'food' },
];

export async function up(sql: Sql) {
  await sql`
    INSERT INTO animals ${sql(animals, 'name', 'type', 'object')}
  `;
}

export async function down(sql: Sql) {
  for (const animal of animals) {
    await sql`
      DELETE FROM animals WHERE id = ${animal.id}
    `;
  }
}
