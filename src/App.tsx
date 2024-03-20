import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { RentalList } from './components/rentalList';
import Edit from './components/edit';
import { Create } from './components/create';
import { Login } from './components/login';

export const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar setOpen={setOpen} open={open} />
      {open ? <Login open={open} setOpen={setOpen} /> : null}
      <Routes>
        <Route path="/" element={<RentalList id={''} />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};
