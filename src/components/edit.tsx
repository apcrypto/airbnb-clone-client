import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { GET_RECORDS } from '../graphql/queries/records';
import { UPDATE_RECORD } from '../graphql/mutations/updateRecord';

export default function Edit() {
  const params = useLocation();
  const navigate = useNavigate();
  const [updateRecord] = useMutation(UPDATE_RECORD);
  const { id, name, level, position } = params.state.record;

  const [form, setForm] = useState({
    name,
    position,
    level,
  });

  const updateForm = (value: object) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  return (
    <div>
      <h3>Update Record</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateRecord({
            variables: {
              updateRecordId: id,
              position: form.position,
              name: form.name,
              level: form.level,
            },
            refetchQueries: [GET_RECORDS, 'GetRecords'],
          });
          navigate('/', { state: {} });
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Intern"
              checked={form.level === 'Intern'}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              Intern
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="Junior"
              checked={form.level === 'Junior'}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">
              Junior
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="Senior"
              checked={form.level === 'Senior'}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionSenior" className="form-check-label">
              Senior
            </label>
          </div>
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
