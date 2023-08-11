import React from 'react';
import { styled, css } from 'styled-components';
import search from '../assert/search.png';
import logo1 from '../assert/logo1.png';
import logo2 from '../assert/logo2.png';
import hamburger from '../assert/hamburger.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderBox>
      <HeaderList>
        <HeaderLeftBox>
          <HeaderHamburgerBox>
            <HeaderHamburger />
          </HeaderHamburgerBox>
          <HeaderLogoBox>
            <HeaderLogoItem>
              <HeaderLogo1 />
              <HeaderLogo2 />
            </HeaderLogoItem>
          </HeaderLogoBox>
          <ButtonBox>
            <ButtonItem>
              <About>About</About>
              <Products>Products</Products>
              <ForTeams>For Teams</ForTeams>
            </ButtonItem>
          </ButtonBox>
        </HeaderLeftBox>
        <SearchInputBox>
          <HeaderSearch />
          <SearchInput placeholder="Search..." />
        </SearchInputBox>
        <AuthBox>
          <AuthItem>
            <Login to="/login">Log in</Login>
            <SignUp>Sign up</SignUp>
          </AuthItem>
        </AuthBox>
      </HeaderList>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 3.5px solid #f48026;
  border-bottom: 1.5px solid hsl(210, 8%, 85%);
  height: 52px;
`;

const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 100%;
`;

const HeaderLeftBox = styled.div`
  display: flex;
  /* width: 437.5px; */
  height: 100%;
`;

const HeaderHamburgerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 100%;

  padding: 0 16px;

  &:hover {
    background-color: #e4e6e8;
  }
`;

const HeaderHamburger = styled.img.attrs({
  src: `${hamburger}`,
})`
  cursor: pointer;
  width: 21px;
  height: 20px;

  &:hover {
    background-color: #e4e6e8;
  }
`;

// logo
const HeaderLogoBox = styled.div`
  display: flex;

  padding: 0 8px;

  &:hover {
    background-color: #e4e6e8;
    height: 100%;
  }
`;

const HeaderLogoItem = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo1 = styled.img.attrs({
  src: `${logo1}`,
})`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const HeaderLogo2 = styled.img.attrs({
  src: `${logo2}`,
})`
  cursor: pointer;
  width: 120px;
  height: 15px;

  margin: 2px 0 0 0;
`;

// button
const ButtonBox = styled.div``;

const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 255px;
  height: 100%;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: hsl(210, 8%, 35%);
  font-size: 13.5px;

  /* height: 29px; */

  border-radius: 35px;
  padding: 8px 15px;

  &:hover {
    background-color: #e4e6e8;
  }
`;

const About = styled(Button)``;
const Products = styled(Button)``;
const ForTeams = styled(Button)`
  margin: 0 5px 0 0;
`;

// auth
const AuthBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  margin: 0 10px 0 0;
`;

const AuthItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Login = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13.5px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-radius: 6px;

  width: 63px;
  height: 33px;

  &:hover {
    background-color: #b3d3ea;
  }
`;

const SignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13.5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  border-radius: 6px;

  width: 68px;
  height: 33px;

  &:hover {
    background-color: #0174cd;
  }
`;

// search input
const HeaderSearch = styled.img.attrs({
  src: `${search}`,
})`
  position: absolute;
  margin-left: 10px;
  cursor: pointer;
  width: 19px;
  height: 19px;
`;

const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  border: 1.3px solid #bbc0c4;
  border-radius: 5px;

  margin: 0 10px 0 0;
  padding: 0 0 0 35px;

  width: 100%;
  height: 32px;
`;
