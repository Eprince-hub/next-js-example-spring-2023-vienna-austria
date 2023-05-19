import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE animal_foods (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      animal_id integer NOT NULL REFERENCES animals (id) ON DELETE CASCADE,
      food_id integer NOT NULL REFERENCES foods (id)
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE animal_foods;
  `;
}
