import { deleteAnimalById } from '../../../../database/animals';

export default async function DeleteAnimalPage(props) {
  const animal = await deleteAnimalById(props.params.animalId);

  return <div>{`You deleted ${animal?.name} from the database`}</div>;
}
