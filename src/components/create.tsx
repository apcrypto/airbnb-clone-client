import React, { SyntheticEvent, useState, FC } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { CREATE_RECORD } from '../graphql/mutations/createRecord';
import { GET_RECORDS } from '../graphql/queries/records';
import { TextField, Button, ButtonProps, Box } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  height: 70px;
  width: 250px;
`;

const FormWrapper = styled(Box)`
  justify-content: center;
  display: flex;
`;

export const Create: FC<ButtonProps> = () => {
  const [createRecord] = useMutation(CREATE_RECORD);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    summary: '',
    images: { picture_url: '' },
    address: { country: '', market: '' },
  });

  const updateForm = (value: object) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  async function onSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const newListing = { ...form };

    createRecord({
      variables: newListing,
      refetchQueries: [GET_RECORDS, 'GetRecords'],
    });

    setForm({
      name: '',
      summary: '',
      images: { picture_url: '' },
      address: { country: '', market: '' },
    });

    navigate('/');
  }

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <h3>Create New Listing</h3>
        <div className="form-group">
          <StyledTextField
            label="Name"
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <StyledTextField
            label="Summary"
            type="text"
            className="form-control"
            id="summary"
            value={form.summary}
            onChange={(e) => updateForm({ summary: e.target.value })}
          />
        </div>
        <div className="form-group">
          <StyledTextField
            label="Picture URL"
            type="text"
            className="form-control"
            id="pictureUrl"
            value={form.images.picture_url}
            onChange={(e) =>
              updateForm({ images: { picture_url: e.target.value } })
            }
          />
        </div>
        <div className="form-group">
          <StyledTextField
            label="Country"
            type="text"
            className="form-control"
            id="country"
            value={form.address.country}
            onChange={(e) =>
              updateForm({
                ...form,
                address: {
                  country: e.target.value,
                  market: form.address.market,
                },
              })
            }
          />
        </div>
        <div className="form-group">
          <StyledTextField
            label="Market"
            type="text"
            className="form-control"
            id="city"
            value={form.address.market}
            onChange={(e) =>
              updateForm({
                ...form,
                address: {
                  country: form.address.country,
                  market: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-group">
          <Button variant="contained" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};
