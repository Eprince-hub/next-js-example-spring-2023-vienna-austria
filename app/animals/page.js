import Image from 'next/image';
import Link from 'next/link';
import { getAnimals } from '../../database/animals';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default async function AnimalsPage() {
  const animals = await getAnimals();

  return (
    <main style={{ paddingLeft: '1rem' }}>
      This are my animals
      {animals.map((animal) => {
        return (
          <div key={`animal-div-${animal.id}`}>
            <Link href={`/animals/${animal.id}`}>{animal.name}</Link>
            <br />
            <Image
              src={`/images/${animal.name}.png`}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </main>
  );
}
