import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAnimalById } from '../../../../database/animals';

export const dynamic = 'force-dynamic';

export default async function ReadSingleAnimal(props) {
  const singleAnimal = await getAnimalById(props.params.animalId);

  if (!singleAnimal) {
    notFound();
  }

  return (
    <main style={{ paddingLeft: '1rem' }}>
      <h1>{singleAnimal.name}</h1>
      <Image
        src={`/images/${singleAnimal.name}.png`}
        width={200}
        height={200}
      />
      this is a {singleAnimal.type} carrying a {singleAnimal.object}
    </main>
  );
}
