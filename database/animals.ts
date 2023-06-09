import { cache } from 'react';
import { sql } from './connect';

// export const animals = [
//   { id: 1, name: 'gigi', type: 'cat', object: 'rat' },
//   { id: 2, name: 'freddy', type: 'dog', object: 'biscuit' },
//   { id: 3, name: 'bob', type: 'trashpanda', object: 'candy' },
//   { id: 4, name: 'nagini', type: 'snake', object: 'band' },
//   { id: 5, name: 'kunfu', type: 'panda', object: 'food' },
// ];

// export function getAnimalByName(name) {
//   return animals.find((animal) => animal.name === name);
// }

type Animal = {
  id: number;
  name: string;
  type: string;
  object: string | null;
};

export const getAnimals = cache(async () => {
  const animals = await sql<Animal[]>`
      SELECT * FROM animals
    `;
  return animals;
});

export const getAnimalById = cache(async (id: number) => {
  const [animal] = await sql<Animal[]>`
    SELECT * FROM animals WHERE id = ${id}
  `;
  return animal;
});

export const createAnimal = cache(
  async (name: string, type: string, object: string) => {
    if (!name || !type || !object) return undefined;

    const [animal] = await sql<Animal[]>`
    INSERT INTO animals
      (name, type, object)
    VALUES
      (${name}, ${type}, ${object})
    RETURNING *
  `;

    return animal;
  },
);

export const deleteAnimalById = cache(async (id: number) => {
  const [animal] = await sql<Animal[]>`
    DELETE FROM
      animals
    WHERE
      id = ${id}
    RETURNING *
  `;
  return animal;
});

export const updateAnimalById = cache(
  async (id: number, name: string, type: string, object: string) => {
    if (!name || !type) return undefined;

    const [animal] = await sql<Animal[]>`
      UPDATE animals
      SET
        name = ${name},
        type = ${type},
        object = ${object}
      WHERE
        id = ${id}
    RETURNING *
  `;
    return animal;
  },
);
