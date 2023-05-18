import { updateAnimalById } from '../../../../database/animals';

export default async function UpdateAnimalPage(props) {
  const animal = await updateAnimalById(
    props.params.animalId,
    props.searchParams.name,
    props.searchParams.type,
    props.searchParams.object,
  );

  if (!animal) {
    return <div>No update happened</div>;
  }
  return <div>{`Animal with name ${animal.name} was updated`}</div>;
}
