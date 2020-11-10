import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import {
    Container,

    DivHeader,
    HeaderText,
    HeaderBlock,
    HeaderLink,

    SubHeader,
    SubHeaderTitle,
    SubHeaderText,
    ButtonBlock,

    PriceContent,
    PriceBlock,
    PriceHeader,
    PriceBody,
    PriceTitle,
    PriceText,
    PriceValue,
    BadgeBlock,
    PriceDescription,

    LineDiv,
} from './ServicesStyled';

function Services() {
    const [BtnColorAnnual, setBtnColorAnnual] = useState('#F72585');
    const [BtnColorMonthly, setBtnColorMonthly] = useState('#1f2933');

    const [BtnAnnual, setBtnAnnual] = useState(true);
    const [BtnMonthly, setBtnMonthly] = useState(false);

    const isMediumDevice = useMediaQuery({
        query: '(min-width: 750px) and (max-width: 1050px)'
    });

    const handlePressAnnual = () => {
        setBtnColorAnnual('#F72585');

        setBtnColorMonthly('#1f2933');

        setBtnAnnual(true);
        setBtnMonthly(false);
    };

    const handlePressMonthly = () => {
        setBtnColorMonthly('#F72585');

        setBtnColorAnnual('#1f2933');

        setBtnMonthly(true);
        setBtnAnnual(false);
    };

    const HeaderContent = () => {
        return (
            <DivHeader>

                <Link style={{ textDecoration: 'none' }} to="/ManageSystem">
                    <HeaderText >SeuMercado</HeaderText>
                </Link>
                <HeaderBlock>
                    <HeaderLink>Portfolio</HeaderLink>
                    <HeaderLink>Employees</HeaderLink>

                    <Button style={{
                        borderRadius: 20, color: '#fff',
                        height: 40, padding: 20, fontSize: 15, backgroundColor: '#F72585'
                    }} color="primary" variant="contained"> Buy Now </Button>
                </HeaderBlock>

            </DivHeader>
        );
    }

    const SubHeaderContent = () => {
        return (
            <SubHeader>
                <SubHeaderTitle>Pricing</SubHeaderTitle>
                <SubHeaderText>
                    We have 3 plans to you, choose what you think is best for you now, then 3 months later, we give a 80% discount for 3 months
                </SubHeaderText>

                <ButtonBlock>
                    <Button style={{
                        borderRadius: 2,height: 40, borderWidth: 1, padding: 20, fontSize: 15,
                        backgroundColor: BtnColorAnnual, color: '#fff',
                    }} color="primary" variant="contained" onClick={handlePressAnnual}> Annual
                    </Button>

                    <Button style={{
                        borderRadius: 2, height: 40, padding: 20, fontSize: 15, backgroundColor: BtnColorMonthly, color: '#fff',
                    }} color="primary" variant="contained" onClick={handlePressMonthly}> Monthly
                    </Button>
                </ButtonBlock>
            </SubHeader>
        );
    }

    const PriceBlockContent = () => {
        return (
            <PriceContent>

                <PriceBlock>
                    <PriceHeader>
                        <PriceTitle>Bronze Licence</PriceTitle>
                        <PriceText>A pay per year license, just for you</PriceText>
                        <LineDiv></LineDiv>
                    </PriceHeader>


                    <PriceBody>
                        {BtnAnnual ?
                            <PriceValue>R$350,00</PriceValue>
                            :
                            <PriceValue>R$30,00</PriceValue>
                        }

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>100 products slots</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>3 tables to products</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>5 tables to orders</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>Don't see who buy</PriceDescription>
                        </BadgeBlock>
                    </PriceBody>

                    <Button style={{
                        borderRadius: 5, width: isMediumDevice ? '60%' : '90%',
                        backgroundColor: '#F72585', color: '#fff', height: 40, padding: 20, fontSize: 15, marginTop: 50,
                    }}  variant="contained"> Subscribe now
                    </Button>

                    <PriceText style={{ marginTop: 10 }}>all features 1 month free trial</PriceText>
                </PriceBlock>

                <PriceBlock>
                    <PriceHeader>
                        <PriceTitle>Silver Licence</PriceTitle>
                        <PriceText>A pay per year license, just for you</PriceText>
                        <LineDiv></LineDiv>
                    </PriceHeader>

                    <PriceBody>
                        {BtnAnnual ?
                            <PriceValue>R$500,00</PriceValue>
                            :
                            <PriceValue>R$45,00</PriceValue>
                        }

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>200 products slots</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>5 tables to products</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>8 tables to orders</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>See all users who buy</PriceDescription>
                        </BadgeBlock>
                    </PriceBody>

                    <Button style={{
                        borderRadius: 5, width: isMediumDevice ? '60%' : '90%',
                        backgroundColor: '#F72585', color: '#fff', height: 40, padding: 20, fontSize: 15, marginTop: 50,
                    }}  variant="contained"> Subscribe now
                    </Button>

                    <PriceText style={{ marginTop: 10 }}>all features 1 month free trial</PriceText>
                </PriceBlock>

                <PriceBlock>
                    <PriceHeader>
                        <PriceTitle>Gold Licence</PriceTitle>
                        <PriceText>A pay per year license, just for you</PriceText>
                        <LineDiv></LineDiv>
                    </PriceHeader>

                    <PriceBody>
                        {BtnAnnual ?
                            <PriceValue>R$1000,00</PriceValue>
                            :
                            <PriceValue>R$85,00</PriceValue>
                        }
                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>Unlimited products slots</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>Unlimited tables to products</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>Unlimited tables to orders</PriceDescription>
                        </BadgeBlock>

                        <BadgeBlock>
                            <PriceDescription>+ </PriceDescription>
                            <PriceDescription>Manage who can buy</PriceDescription>
                        </BadgeBlock>
                    </PriceBody>

                    <Button style={{
                        borderRadius: 5, width: isMediumDevice ? '60%' : '90%',
                        backgroundColor: '#F72585', color: '#fff', height: 40, padding: 20, fontSize: 15, marginTop: 50,
                    }}  variant="contained"> Subscribe now
                    </Button>

                    <PriceText style={{ marginTop: 10 }}>all features 1 month free trial</PriceText>
                </PriceBlock>

            </PriceContent>
        );
    }

    return (
        <Container>
            <HeaderContent />

            <SubHeaderContent />

            <PriceBlockContent />
        </Container>
    );
}
export default Services;