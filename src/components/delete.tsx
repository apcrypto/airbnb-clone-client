import React from 'react';
import { useMutation } from '@apollo/client';
import { GET_RECORDS } from '../graphql/queries/records';
import { DELETE_RECORD } from '../graphql/mutations/deleteRecord';

interface DeleteRecordProps {
  id: string;
}

export const DeleteRecord: React.FC<DeleteRecordProps> = ({ id }) => {
  const [deleteRecord, { loading, error }] = useMutation(DELETE_RECORD, {
    variables: { id },
    refetchQueries: [GET_RECORDS, 'GetRecords'],
  });

  if (loading) return <span>Deleting...</span>;
  if (error) return <span>Delete error! {error.message}</span>;

  return (
    <button
      className="btn btn-link"
      onClick={() => {
        deleteRecord({ variables: { id } });
      }}
    >
      Delete
    </button>
  );
};
