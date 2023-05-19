import { Sql } from 'postgres';

export const animalFoods = [
  { id: 1, animal_id: 1, food_id: 4 },
  { id: 2, animal_id: 2, food_id: 1 },
  { id: 3, animal_id: 3, food_id: 2 },
  { id: 4, animal_id: 1, food_id: 3 },
  { id: 5, animal_id: 4, food_id: 4 },
];

export async function up(sql: Sql) {
  await sql`
    INSERT INTO animal_foods ${sql(animalFoods, 'animal_id', 'food_id')}
  `;
}

export async function down(sql: Sql) {
  for (const animalFood of animalFoods) {
    await sql`
      DELETE FROM animal_foods WHERE id = ${animalFood.id}
    `;
  }
}
