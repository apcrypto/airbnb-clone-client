import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RECORDS } from '../graphql/queries/records';
import { Record } from '../@types/Record/record';
import styled from 'styled-components';
import { Listing } from './listing';
import { DeleteRecord } from './delete';
import { Box } from '@mui/system';

interface DeleteRecordProps {
  id: string;
}

const ListingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledListing = styled(Listing)`
  margin: 1rem;
`;

const StyledBox = styled(Box)`
  margin-left: 1rem;
`;

export const RentalList: FC<DeleteRecordProps> = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_RECORDS, {
    variables: {
      offset: 10,
      limit: 12,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ListingWrapper>
      {data.records.map((record: Record) => (
        <div key={record.id}>
          <StyledListing record={record} key={record.id} />
          <StyledBox key={record.id}>£{record.price.$numberDecimal}</StyledBox>
        </div>
      ))}
    </ListingWrapper>
  );
};
