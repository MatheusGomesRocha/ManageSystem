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
import Hands_svg from './svg/hands';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

  WeDo,
  WeDoTitle,
  WeDoBlock,
  WeDoText,
  WeDoSubtext,
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
            more custormes and optimize the orders that your business will receive.
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

      <WeDo>
        
        <WeDoBlock>
          <Hands_svg />
          <WeDoText>Organization</WeDoText>
          <WeDoSubtext>We organize your products and orders the way you want.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <Hands_svg />
          <WeDoText>Notification</WeDoText>
          <WeDoSubtext>We send a notification warning to your phone or computer with new orders.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <Hands_svg />
          <WeDoText>Management</WeDoText>
          <WeDoSubtext>You'll have registration system, view users history, cancel new orders.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <Hands_svg />
          <WeDoText>Chat</WeDoText>
          <WeDoSubtext>We offer a realtime chat so you can talk with your customers and.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <Hands_svg />
          <WeDoText>Rating</WeDoText>
          <WeDoSubtext>All users who buy anything can rate your business (higher your rating, more we can show your commerce to users).</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <Hands_svg />
          <WeDoText>Automation</WeDoText>
          <WeDoSubtext>We help your businnes gain leverage and efficiency trough smart automation.</WeDoSubtext>
        </WeDoBlock>

      </WeDo>


    </Container >
  );
}


export default App;
