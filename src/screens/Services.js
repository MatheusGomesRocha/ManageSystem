import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
} from './ServicesStyled';

const HeaderContent = () => {
    return (
        <DivHeader>

            <Link style={{ textDecoration: 'none' }} to="/">
                <HeaderText >SeuMercado</HeaderText>
            </Link>
            <HeaderBlock>
                <HeaderLink>Portfolio</HeaderLink>
                <HeaderLink>Employees</HeaderLink>

                <Button style={{
                    borderRadius: 20, color: '#fff',
                    height: 40, padding: 20, fontSize: 15,
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

            </ButtonBlock>
        </SubHeader>
    );
}

function Services() {
    return (
        <Container>
            <HeaderContent />

            <SubHeaderContent />
        </Container>
    );
}
export default Services;