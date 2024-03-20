import { gql } from 'graphql-tag';

export const GET_RECORDS = gql`
  query GetRecords($offset: Int, $limit: Int)  {
    records(offset: $offset, limit: $limit) {
      id
      name
      images { picture_url }
      summary
      address { market, country }
      price
    }
  }
`;

