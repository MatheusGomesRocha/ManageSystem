import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import bg_img from './img/city.jpg';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import logo5 from './img/logo5.png';
import logo6 from './img/logo6.png';
import AutomationSvg from './svg/automation';
import ChatSvg from './svg/chat';
import ManageSvg from './svg/management';
import NotificationSvg from './svg/notification';
import OrganizationSvg from './svg/organization';
import RateSvg from './svg/rate';
import ChillSvg from './svg/chill';

import {
  Container,

  Header,
  HeaderText,

  SubHeader,
  BgDiv,
  Img,
  DivTitle,
  Title,
  SubTitle,

  WorkWith,
  WorkWithTitle,
  WorkWithBlock,
  WorkWithImg,

  WeDoTitleDiv,
  WeDoTitle,
  WeDo,
  WeDoBlock,
  WeDoText,
  WeDoSubtext,

  Price,
  PriceBlock,
  PriceTitle,
  PriceText,

  FormDiv,
  FormBlock,
  FormTitle,
  FormText,
  Form,
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

      {/* HEADER CONTENT */}
      <Header>
        <HeaderText>SeuMercado</HeaderText>
        <Button style={{ height: 40, padding: 20, fontSize: 15, marginRight: isLgDesktop ? '25%' : '20%' }} variant="contained" color="primary">
          Buy Now
        </Button>
      </Header>

      {/* SUBHEADER CONTENT */}
      <SubHeader>
        <BgDiv></BgDiv>
        
        <DivTitle>
          <Title>Welcome to SeuMercado official website</Title>
          <SubTitle>
            We are responsible to create and launch your commerce on our App with the purpose to bring
            more custormes and optimize the orders that your business will receive.
          </SubTitle>
          <Button style={{ marginTop: 10, height: 40, width: 150, padding: 20, fontSize: 15 }} variant="contained" color="primary">
            Login
          </Button>
        </DivTitle>

        <Img src={bg_img} />
      </SubHeader>

      {/* WORK WITH CONTENT */}
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

      {/* WHAT WE DO CONTENT */}
      <WeDoTitleDiv>
        <WeDoTitle>What we do</WeDoTitle>
      </WeDoTitleDiv>
      <WeDo>

        <WeDoBlock>
          <OrganizationSvg />
          <WeDoText>Organization</WeDoText>
          <WeDoSubtext>We organize your products and orders the way you want.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <NotificationSvg />
          <WeDoText>Notification</WeDoText>
          <WeDoSubtext>We send a notification warning to your phone or computer with new orders.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <ManageSvg />
          <WeDoText>Management</WeDoText>
          <WeDoSubtext>You'll have registration system, view users history, cancel new orders.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <ChatSvg />
          <WeDoText>Chat</WeDoText>
          <WeDoSubtext>We offer a realtime chat so you can talk with your customers and.</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <RateSvg />
          <WeDoText>Rating</WeDoText>
          <WeDoSubtext>All users who buy anything can rate your business (higher your rating, more we can show your commerce to users).</WeDoSubtext>
        </WeDoBlock>

        <WeDoBlock>
          <AutomationSvg />
          <WeDoText>Automation</WeDoText>
          <WeDoSubtext>We help your businnes gain leverage and efficiency trough smart automation.</WeDoSubtext>
        </WeDoBlock>

      </WeDo>

      {/* DONT WORRY ABOUT PRICING CONTENT */}
      <Price>
        <PriceBlock>
          <PriceTitle>Don't worry about pricing</PriceTitle>
          <PriceText>
            We have 3 plans to shop our system, 1/3/6 months and the higher your plan, more we can offer new functions, we are the lowest price on the market, and we will be happy to help you. And if that’s not enough, you have 1 month free trial.
          </PriceText>
        </PriceBlock>
        <ChillSvg />
      </Price>

      {/** FORM CONTENT */}
      <FormDiv>
        <FormBlock>
          <FormTitle>Contact us</FormTitle>
          <FormText>
            Do you have any questions? please fill out the form and feel free to ask whatever you want.
          </FormText>
        </FormBlock>

        <Form>
          <TextField
            id="outlined-password-input"
            label="Seu email"
            type="email"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Dúvida"
            type="text"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Mensagem"
            type="text"
            variant="outlined"
          />
        </Form>
      </FormDiv>

    </Container >
  );
}


export default App;
