import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import AutomationSvg from './svg/automation';
import ChatSvg from './svg/chat';
import ManageSvg from './svg/management';
import NotificationSvg from './svg/notification';
import OrganizationSvg from './svg/organization';
import RateSvg from './svg/rate';
import ChillSvg from './svg/chill';
import FaceSvg from './svg/facebook';
import InstaSvg from './svg/instagram';
import LinkedinSvg from './svg/linkedin';

import {
  Container,

  Header,
  HeaderText,

  DivHeader,
  DivTitle,
  Title,
  SubTitle,

  WhoAre,
  WhoAreTitle,
  LineDiv,
  WhoAreText,

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
  FormPurple,

  Footer,
  ContactBlock,
  ContactText,
  ContactLink,
  FooterBlock,
  FooterTitle,
  FooterLink,
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

  const isMobileDevice = useMediaQuery({
    query: '(max-width: 750px)'
  })

  const isMdDevice = useMediaQuery({
    query: '(min-width: 751px)'
  })

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
        <DivHeader>
          <HeaderText>SeuMercado</HeaderText>
          <Button style={{ borderRadius: 20, backgroundColor: '#7851A9', color: '#fff', height: isMobileDevice ? 50 : 40, padding: 20, fontSize: 15, marginRight: isLgDesktop ? '25%' : '20%' }} variant="contained">
            Buy Now
          </Button>
        </DivHeader>

        <DivTitle>
          <Title>Welcome to SeuMercado official website</Title>
          <SubTitle>
            We are responsible to create and launch your commerce on our App with the purpose to bring
            more custormes and optimize the orders that your business will receive.
              </SubTitle>
          <Button style={{ borderRadius: isMobileDevice ? 25 : 20, backgroundColor: '#7851A9', color: '#fff', marginTop: 15, height: isMobileDevice ? 50 : 40, width: 150, padding: 20, fontSize: 15 }} variant="contained">
            Login
          </Button>
        </DivTitle>
      </Header>

      {/* SUBHEADER CONTENT */}


      {/* WHO WE ARE CONTENT*/}

      <WhoAre>
        <WhoAreTitle>Who we are</WhoAreTitle>
        <LineDiv></LineDiv>
        <WhoAreText>
          We are a startup focused on helping other small businesses to level up, bringing more customers and giving a system that is capable of automating your commerce, you will do almost nothing, you just need to register new products and help answer question if a customer has one and we are responsible to do everything that is important, to you.
        </WhoAreText>
        <Button style={{ backgroundColor: '#fff', borderRadius: isMobileDevice ? 25 : 20, fontFamily: 'arial', width: isMobileDevice && '50%', height: isMobileDevice ? 50 : 40, padding: 20, marginTop: 20, fontSize: 15 }} variant="contained">
          Buy Now
        </Button>
      </WhoAre>


      {/* WHAT WE DO CONTENT */}
      <WeDoTitleDiv>
        <WeDoTitle>What we do</WeDoTitle>
        <LineDiv color="#000"></LineDiv>
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

      <LineDiv color="#ddd" style={{ width: '100%' }}></LineDiv>

      {/* DONT WORRY ABOUT PRICING CONTENT */}
      <Price>
        <PriceBlock>
          <PriceTitle>Don't worry about pricing</PriceTitle>
          <PriceText>
            We have 3 plans, 1/3/6 months and the higher your plan, more we can offer new functions, we are the lowest price on the market, and we will be happy to help you. And if that’s not enough, you have 1 month free trial.
          </PriceText>
        </PriceBlock>

        <ChillSvg width={isMobileDevice ? '300px' : '400px'} height={isMobileDevice ? '300px' : '400px'} />
      </Price>

      <LineDiv color="#ddd" style={{ width: '100%' }}></LineDiv>

      {/** FORM CONTENT */}
      <FormDiv>

        <FormBlock>
          <FormTitle>Talk to us</FormTitle>
          <LineDiv color="#000"></LineDiv>
          <FormText>
            Do you have any questions? please fill out the form and feel free to ask whatever you want.
          </FormText>
        </FormBlock>

        <Form>
          <FormTitle>Contact Us</FormTitle>
          <LineDiv color="#000"></LineDiv>

          <FormText style={{ marginBottom: 10 }}>We answer all yours questions</FormText>
          <TextField
            style={{ width: '100%', marginTop: 10, }}
            label="Full Name*"
            type="email"
            variant="outlined"
          />
          <TextField
            style={{ width: '100%', marginTop: 10, }}
            label="Email*"
            type="text"
            variant="outlined"
          />
          <TextField
            style={{ width: '100%', marginTop: 10, }}
            label="Message*"
            type="text"
            variant="outlined"
          />
          <Button type="submit" style={{ borderRadius: 25, backgroundColor: '#7851A9', color: '#fff', fontFamily: 'arial', width: '100%', height: 50, padding: 20, marginTop: 20, fontSize: 15 }} variant="contained">
            Send Message
          </Button>
        </Form>

      </FormDiv>

      <FormPurple></FormPurple>

      {isMobileDevice &&
          <ContactBlock>
            <ContactText>SeuMercado</ContactText>
            <ContactLink >
              <FaceSvg left={10}/>
              <InstaSvg left={10}/>
              <LinkedinSvg left={10}/>
            </ContactLink>
          </ContactBlock>
        }

      <Footer>
        {isMdDevice &&
          <ContactBlock>
            <ContactText>SeuMercado</ContactText>
            <ContactLink>
              <FaceSvg />
              <InstaSvg />
              <LinkedinSvg />
            </ContactLink>
          </ContactBlock>
        }

        <FooterBlock>
          <FooterTitle>Workers</FooterTitle>
          <LineDiv></LineDiv>
          <FooterLink href="#">Matheus</FooterLink>
          <FooterLink href="#">Jhon</FooterLink>
          <FooterLink href="#">Peter</FooterLink>
          <FooterLink href="#">Hughie</FooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterTitle>App</FooterTitle>
          <LineDiv></LineDiv>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">How works</FooterLink>
          <FooterLink href="#">Graphics</FooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterTitle>Portfolio</FooterTitle>
          <LineDiv></LineDiv>
          <FooterLink href="#">Centilano</FooterLink>
          <FooterLink href="#">Cicrano</FooterLink>
          <FooterLink href="#">Beltrano</FooterLink>
          <FooterLink href="#">Fulano</FooterLink>
          <FooterLink href="#">Teltano</FooterLink>
          <FooterLink href="#">Ventilano</FooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterTitle>Dashboard</FooterTitle>
          <LineDiv></LineDiv>
          <FooterLink href="#">Functions</FooterLink>
          <FooterLink href="#">Images</FooterLink>
          <FooterLink href="#">Price</FooterLink>
        </FooterBlock>
      </Footer>

    </Container>
  );
}


export default App;
