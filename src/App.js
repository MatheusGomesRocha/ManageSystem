import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import bg_img from './img/city.jpg';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import logo5 from './img/logo5.png';
import logo6 from './img/logo6.png';

import {
  Container,

  Header,
  HeaderText,

  SubHeader,
  Img,
  DivTitle,
  Title,
  SubTitle,

  WorkWith,
  WorkWithTitle,
  WorkWithBlock,
  WorkWithImg,
} from './AppStyled';



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (p) => {
    setPassword(p.target.value)
  }

  const handleSubmit = () => {
    console.log(email, password)
  }

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(min-width: 1200px)'
  })

  const isTabletOrMobileDeviceMax = useMediaQuery({
    query: '(max-width: 1500px)'
  })

  const isLgDesktop = useMediaQuery({
    query: '(min-width: 1501px)'
  })

  return (
    <Container>
      <Header>
        <HeaderText>SeuMercado</HeaderText>
        <Button style={{ height: 40, padding: 20, fontSize: 15, marginRight: isLgDesktop ? '25%' : '20%' }} variant="contained" color="primary">
          Buy now
        </Button>
      </Header>

      <SubHeader>

        <DivTitle>
          <Title>Welcome to SeuMercado official website</Title>
          <SubTitle>
            We are responsible to create and launch your commerce on our App with the purpose to bring
            more custormes and optimize the orders that your place will receive.
          </SubTitle>
        </DivTitle>

        <Img src={bg_img} />
      </SubHeader>

      <WorkWith>
        <WorkWithTitle>Our system has been used by</WorkWithTitle>
        <WorkWithBlock>
          <WorkWithImg src={logo1} />
          <WorkWithImg src={logo2} />
          <WorkWithImg src={logo3} />
          <WorkWithImg src={logo4} />
          <WorkWithImg src={logo5} />
          <WorkWithImg src={logo6} />
        </WorkWithBlock>
      </WorkWith>

    </Container>
  );
}


export default App;