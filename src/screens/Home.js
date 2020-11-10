import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Fade, Modal } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import AutomationSvg from '../svg/automation';
import ChatSvg from '../svg/chat';
import ManageSvg from '../svg/management';
import NotificationSvg from '../svg/notification';
import OrganizationSvg from '../svg/organization';
import RateSvg from '../svg/rate';

import {
    withStyles,
} from '@material-ui/core/styles';

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





function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [bgHeader, setBgHeader] = useState('transparent');
    const [open, setOpen] = useState(false);

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#00CA80',
            padding: 20,
            fontSize: 16,
            height: isMobileDevice ? 50 : 40,
            marginRight: isLgDesktop ? '25%' : '20%',
            borderRadius: isMobileDevice ? 25 : 20,
            width: '100%',
            color: '#fff',

            '&:hover': {
                backgroundColor: '#008353',
            }
        },
    }))(Button);

    const DefaultModal = withStyles(() => ({
        root: {
            width: isMobileDevice && '90%', 
            margin: isMobileDevice && '0 5%', 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
        }
    }))(Modal);

    const CssTextField = withStyles({
        root: {
            '& label': {
                color: '#aaa',
            },
            '& label.Mui-focused': {
                color: '#4361EE',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#aaa',
                },
                '&:hover fieldset': {
                    borderColor: '#aaa',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#4361EE',
                },
                color: '#aaa',
                width: '100%', 
                marginTop: 15, 
            },
    
        },
    })(TextField);

    const handleName = (n) => {
        setName(n.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (m) => {
        setMessage(m.target.value)
    }

    const handlePassword = (p) => {
        setPassword(p.target.value)
    }

    const handleSubmit = () => {
        console.log(email, message)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
    };

    const ModalOpen = () => {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Fade in={open} style={{ backgroundColor: '#fff', height: 500, width: 400 }}>
                    <Form onSubmit={handleSubmit} style={{ marginTop: 0 }}>
                        <FormTitle style={{ color: '#000' }}>Login</FormTitle>
                        <LineDiv color="#000"></LineDiv>

                        <CssTextField
                            color="purple"
                            id="outlined-basic"
                            onChange={handleEmail}
                            label="Email*"
                            type="email"
                            variant="outlined"
                            value={email}
                        />
                        <CssTextField
                            onChange={handlePassword}
                            label="Senha*"
                            type="password"
                            variant="outlined"
                            value={password}
                        />
                        <Link to="ManageSystem/Management" style={{ width: '100%', textDecoration: 'none' }}>
                            <DefaultBtn type="submit" style={{ borderRadius: 25, height: 50, marginTop: 20}} variant="contained">
                                Login
                            </DefaultBtn>
                        </Link>
                    </Form>

                </Fade>
            </Modal>
        );
    }

    const HeaderContent = () => {
        return (
            <Header onscroll={handleScroll} >
                <Fade in timeout={800}>
                    <DivHeader bgHeader={bgHeader}>
                        <HeaderText>SeuMercado</HeaderText>
                        <HeaderBlock>
                            <HeaderLink href="#">Portfolio</HeaderLink>
                            <HeaderLink href="#">Employees</HeaderLink>

                            <Link style={{ textDecoration: 'none' }} to="ManageSystem/Services">
                                <DefaultBtn variant="contained"> Buy Now </DefaultBtn>
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
                    <DefaultBtn onClick={handleOpen} style={{ width: isMobileDevice ? '50%' : '20%', marginRight: 0, marginTop: 20 }} variant="contained">
                        Login
                    </DefaultBtn>
                </DivTitle>

                <ModalOpen />
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

                <DefaultBtn style={{ marginTop: 20, marginRight: 0, width: isMobileDevice ? '50%' : '20%', }} variant="contained">
                    Buy Now
                </DefaultBtn>
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
                <PriceTitle>Don't worry about pricing</PriceTitle>
                <PriceText>
                    We have 3 plans, 1/3/6 months and the higher your plan, more we can offer new functions, we are the lowest price on the market, and we will be happy to help you. And if that’s not enough, you have 1 month free trial.
                </PriceText>
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
                    <CssTextField
                        label="Full Name*"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        style={{ }}
                        type="text"
                    />
                    <CssTextField
                        label="Email*"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        style={{ width: '100%', marginTop: 15, }}
                        type="text"
                    />
                    <CssTextField
                        label="Message*"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        style={{ width: '100%', marginTop: 15, }}
                        type="text"
                    />
                    <DefaultBtn type="submit" style={{marginTop: 20, marginRight: 0, height: 50, borderRadius: 25}} variant="contained">
                        Send Message
                    </DefaultBtn>
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


            {/* DONT WORRY ABOUT PRICING CONTENT */}

            <PriceContent />

            {/** FORM CONTENT */}

            <FormContent />
            <FormPurple></FormPurple>

        </Container>

    );
}


export default Home;
