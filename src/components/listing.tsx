import React, { FC } from 'react';
import { Record } from '../@types/Record/record';
import styled from 'styled-components';

interface RecordProps {
  record: Record;
}

const Image = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: fill;
  border-radius: 1rem;
`;

const ListingWrapper = styled.div`
  margin: 1rem;
`;

export const Listing: FC<RecordProps> = ({ record }) => (
  <ListingWrapper>
    <div>
      <Image src={record.images.picture_url} />
    </div>
    <div>
      {record.address.market}, {record.address.country}
    </div>
  </ListingWrapper>
);
