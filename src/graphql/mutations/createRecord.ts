import { gql } from 'graphql-tag';

export const CREATE_RECORD = gql`
  mutation CreateRecord($name: String!, $summary: String, $images: ImagesInput, $address: AddressInput) {
    createRecord(name: $name, summary: $summary, images: $images, address: $address) {
      id
    }
  }
`;
