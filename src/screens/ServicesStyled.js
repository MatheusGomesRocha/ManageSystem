import styled from 'styled-components';
import { h1, h2, h3, span, color, primary, secondary, gray } from '../Config';

export const Container = styled.div`
    font-family: Sans-Serif;
    background-color: ${secondary};
    height: 100vh;

    @media(max-width: 1050px) {
        height: auto;
    }
`;


export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    background-color: ${secondary};

    @media(max-width: 800px) {
        display: none;
    }
`;
export const HeaderBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeaderText = styled.span`
    font-size: ${h2};
    color: ${primary};

    @media(min-width: 1501px) {
        margin-left: 25%;
    }
`;
export const HeaderLink = styled.span`
    font-size: ${span};
    margin-right: 20px;
    color: ${primary};
`;



export const SubHeader = styled.div`
    height: 400px;
    background-color: ${primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
`;
export const SubHeaderTitle = styled.span`
    font-size: ${h1};
    margin-bottom: 10px;
`;
export const SubHeaderText = styled.span`
    font-size: ${span};
    width: 50%;
    text-align: center;

    @media(max-width: 800px) {
        width: 90%;
    }
`;
export const ButtonBlock = styled.div`
    margin-top: 20px;
    border: 1px solid ${primary};
`;


export const PriceContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: -150px 5% 0 5%;

    @media(min-width: 1051px) {
        justify-content: center;
    }

    @media(max-width: 1050px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const PriceBlock = styled.div`
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${primary};
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px 0 #ddd;
    border-radius: 5px;

    @media(max-width: 749px) {
        width: 100%;
        margin: 25px 0;
    }

    @media(min-width: 750px) and (max-width: 1050px) {
        width: 80%;
        margin: 25px 0;
    }

    @media(min-width: 1051px) {
        margin: 0 30px;
    }
`;
export const PriceHeader = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const PriceTitle = styled.span`
    font-size: ${h2};
    margin-bottom: 5px;
    color: ${color};
`;
export const PriceText = styled.span`
    color: ${gray};
`;
export const PriceBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const PriceValue = styled.span`
    font-size: ${h2};
    color: ${color};
`;
export const BadgeBlock = styled.div`
    margin-top: 15px;
`;
export const PriceDescription = styled.span`
    text-align: center;
    font-size: 18px;
    color: ${color};
`;

export const LineDiv = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin-top: 10px;
`;