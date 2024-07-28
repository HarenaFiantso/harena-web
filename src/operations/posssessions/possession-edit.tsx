import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PossessionEdit = () => {
  const { patrimoineNom, possessionNom } = useParams();

  return (
    <Edit
      id={possessionNom}
      queryOptions={{ meta: { patrimoineNom } }}
      resource="possessions"
    >
      <SimpleForm>
        <TextInput fullWidth source="nom" label="Nom" validate={required()} />
        <DateInput fullWidth source="t" label="Date T" validate={required()} />
        <TextInput
          fullWidth
          source="patrimoine.nom"
          label="Patrimoine"
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );
};
