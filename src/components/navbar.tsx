import React, { Dispatch, FC, SetStateAction } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@mui/system';

type LoginPage = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SignInWrapper = styled.div`
  display: flex;
`;

const NavWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreateLink = styled(NavLink)`
  margin-left: 4rem;
  margin-right: 4rem;
`;

const HomeLink = styled(NavLink)`
  margin-left: 4rem;
  width: 80px;
`;

const MainLogo = styled.img`
  width: 6.5rem;
  margin: 20px;
`;

export const Navbar: FC<LoginPage> = ({ setOpen }) => {
  return (
    <NavWrapper>
      <Link to="/">
        <MainLogo src={require('../assets/logo.png')} />
      </Link>
      <nav>
        <NavWrapper>
          <CreateLink to="/create">Create Listing</CreateLink>
          <CreateLink onClick={() => setOpen(true)} to="/">
            Log in or sign up
          </CreateLink>
        </NavWrapper>
      </nav>
    </NavWrapper>
  );
};
