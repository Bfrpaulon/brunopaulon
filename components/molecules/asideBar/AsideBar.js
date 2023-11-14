import React from 'react'
import styled from 'styled-components';
import customTheme from '@/public/customTheme';
import { Logo } from '@/components/atoms/logo/Logo'
import Navbar from '@/components/atoms/nav/NavBar';

const ContainerAsideBar = styled.div`
  width: 20vw; 
  height: 100vh;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${customTheme.palette.background.paper};
  box-shadow: 0 0 10px ${customTheme.palette.secondary.main};
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 10px 0 15px ${customTheme.palette.secondary.dark};
  }
`;


const AsideBar = () => {
  return (
    <ContainerAsideBar >
      <Logo />
      <Navbar />
    </ContainerAsideBar>
  )
}

export default AsideBar