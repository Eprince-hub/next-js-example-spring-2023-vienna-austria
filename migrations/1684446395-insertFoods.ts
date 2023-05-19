import { Sql } from 'postgres';

export const foods = [
  { id: 1, name: 'Tomato', type: 'Vegetable' },
  { id: 2, name: 'Potato', type: 'Vegetable' },
  { id: 3, name: 'Rice', type: 'Legume' },
  { id: 4, name: 'Mango', type: 'Fruits' },
];

export async function up(sql: Sql) {
  await sql`
    INSERT INTO foods ${sql(foods, 'name', 'type')}
  `;
}

export async function down(sql: Sql) {
  for (const food of foods) {
    await sql`
      DELETE FROM foods WHERE id = ${food.id}
    `;
  }
}
