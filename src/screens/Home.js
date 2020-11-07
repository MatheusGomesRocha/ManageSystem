import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import AutomationSvg from '../svg/automation';
import ChatSvg from '../svg/chat';
import ManageSvg from '../svg/management';
import NotificationSvg from '../svg/notification';
import OrganizationSvg from '../svg/organization';
import RateSvg from '../svg/rate';
import ChillSvg from '../svg/chill';

import {
    Container,

    Header,
    HeaderText,
    HeaderBlock,
    HeaderLink,

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
} from './HomeStyled';
import purple from '@material-ui/core/colors/purple';

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [bgHeader, setBgHeader] = useState('');
    const [colorHeader, setColorHeader] = useState('');
    const [transition, setTransition] = useState('');

    const handleName = (n) => {
        setName(n.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (m) => {
        setMessage(m.target.value)
    }

    const handleSubmit = () => {
        console.log(email, message)
    }

    const isMobileDevice = useMediaQuery({
        query: '(max-width: 750px)'
    });

    const isLgDesktop = useMediaQuery({
        query: '(min-width: 1501px)'
    });

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 0) {
            setBgHeader('#1f2933');

        } else {
            setBgHeader('transparent');
        }
    }

    useEffect(() => {
        window.onscroll = () => handleScroll();
        setColorHeader('#fff');
    }, []);

    const HeaderContent = () => {
        return (
            <Header>
                <Fade in timeout={800}>
                    <DivHeader bgHeader={bgHeader}>
                        <HeaderText>SeuMercado</HeaderText>
                        <HeaderBlock>
                            <HeaderLink href="#">Portfolio</HeaderLink>
                            <HeaderLink href="#">Employees</HeaderLink>

                            <Link style={{ textDecoration: 'none' }} to="services">
                                <Button style={{
                                    borderRadius: 20, color: '#fff',
                                    height: isMobileDevice ? 50 : 40, padding: 20, fontSize: 15,
                                    marginRight: isLgDesktop ? '25%' : '20%', width: '100%'
                                }} variant="contained" color="primary"> Buy Now </Button>
                            </Link>
                        </HeaderBlock>

                    </DivHeader>
                </Fade>

                <DivTitle>
                    <Title>Welcome to SeuMercado official website</Title>
                    <SubTitle>
                        We are responsible to create and launch your commerce on our App with the purpose to bring
                        more custormes and optimize the orders that your business will receive.
                    </SubTitle>
                    <Button style={{ borderRadius: isMobileDevice ? 25 : 20, color: '#fff', marginTop: 15, height: isMobileDevice ? 50 : 40, width: 150, padding: 20, fontSize: 15 }} variant="contained" color="primary">
                        Login
                    </Button>
                </DivTitle>
            </Header>
        );
    }

    const WhoWeAreContent = () => {
        return (
            <WhoAre>
                <WhoAreTitle>Who we are</WhoAreTitle>
                <LineDiv></LineDiv>
                <WhoAreText>
                    We are a startup focused on helping other small businesses to level up, bringing more customers and giving a system that is capable of automating your commerce, you will do almost nothing, you just need to register new products and help answer question if a customer has one and we are responsible to do everything that is important, to you.
      </WhoAreText>
                <Button href="./screens/Services" style={{ backgroundColor: '#303f9f', borderRadius: isMobileDevice ? 25 : 20, fontFamily: 'arial', width: isMobileDevice && '50%', height: isMobileDevice ? 50 : 40, padding: 20, marginTop: 20, fontSize: 15, color: '#fff' }} variant="contained">
                    Buy Now
      </Button>
            </WhoAre>
        );
    }

    const WhatWeDoContent = () => {
        return (
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
        );
    }

    const PriceContent = () => {
        return (
            <Price>
                <PriceBlock>
                    <PriceTitle>Don't worry about pricing</PriceTitle>
                    <PriceText>
                        We have 3 plans, 1/3/6 months and the higher your plan, more we can offer new functions, we are the lowest price on the market, and we will be happy to help you. And if that’s not enough, you have 1 month free trial.
          </PriceText>
                </PriceBlock>

                <ChillSvg width={isMobileDevice ? '300px' : '400px'} height={isMobileDevice ? '300px' : '400px'} />
            </Price>
        );
    }

    const FormContent = () => {
        return (
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
                        onChange={handleName}
                        style={{ width: '100%', marginTop: 15, }}
                        label="Full Name*"
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        color="purple"
                        id="outlined-basic"
                        onChange={handleEmail}
                        style={{ width: '100%', marginTop: 15, }}
                        label="Email*"
                        type="email"
                        variant="outlined"
                        value={email}
                    />
                    <TextField
                        onChange={handleMessage}
                        style={{ width: '100%', marginTop: 15, }}
                        label="Message*"
                        type="text"
                        variant="outlined"
                        value={message}
                    />
                    <Button type="submit" style={{ borderRadius: 25, color: '#fff', fontFamily: 'arial', width: '100%', height: 50, padding: 20, marginTop: 20, fontSize: 15 }} variant="contained" color="primary">
                        Send Message
          </Button>
                </Form>

            </FormDiv>
        );
    }


    return (
        <Container>

            <HeaderContent />

            {/* SUBHEADER CONTENT */}

            <WhoWeAreContent />
            {/* WHO WE ARE CONTENT*/}




            {/* WHAT WE DO CONTENT */}
            <WeDoTitleDiv>
                <WeDoTitle>What we do</WeDoTitle>
                <LineDiv color="#000"></LineDiv>
            </WeDoTitleDiv>

            <WhatWeDoContent />

            <LineDiv color="#ddd" style={{ width: '100%' }}></LineDiv>

            {/* DONT WORRY ABOUT PRICING CONTENT */}

            <PriceContent />

            <LineDiv color="#ddd" style={{ width: '100%' }}></LineDiv>

            {/** FORM CONTENT */}

            <FormContent />
            <FormPurple></FormPurple>

        </Container>

    );
}


export default Home;
