import styled from 'styled-components';
import { h1, h2, span, color } from '../Config';

export const Container = styled.div``;


export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 20%;

    @media(max-width: 800px) {
        display: none;
    }
`;
export const HeaderBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const HeaderText = styled.span`
    font-size: ${h2};
    color: #000;

    @media(min-width: 1501px) {
        margin-left: 25%;
    }
`;
export const HeaderLink = styled.span`
    font-size: ${span};
    margin-right: 20px;
`;


export const SubHeader = styled.div`
    height: 400px;
    background-color: #3f51b5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const SubHeaderTitle = styled.span`
    font-size: ${h1};
    color: #fff;
    margin-bottom: 10px;
`;
export const SubHeaderText = styled.span`
    font-size: ${span};
    color: #ddd;
    width: 50%;
    text-align: center;
`;
export const ButtonBlock = styled.div`
    margin-top: 20px;
`;


export const PriceContent = styled.div``;
export const PriceTitle = styled.span``;
export const PriceText = styled.span``;
export const PriceValue = styled.span``;
export const PriceDescription = styled.span``;