import { createAnimal } from '../../../database/animals';

export default async function CreateAnimalPage(props) {
  const animal = await createAnimal(
    props.searchParams.name,
    props.searchParams.type,
    props.searchParams.object,
  );

  if (!animal) {
    return <div>Animal not created</div>;
  }
  return <div>{`Animal with name ${animal.name} is created`}</div>;
}
