import styled from 'styled-components';
import { h1, h2, h3, span, color } from '../Config';

export const Container = styled.div`
    font-family: Sans-Serif;
    background-color: #1f2933;
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
    background-color: #1f2933;

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
    color: #fff;

    @media(min-width: 1501px) {
        margin-left: 25%;
    }
`;
export const HeaderLink = styled.span`
    font-size: ${span};
    margin-right: 20px;
    color: #fff;
`;



export const SubHeader = styled.div`
    height: 400px;
    background-color: #616e7c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
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

    @media(max-width: 800px) {
        width: 90%;
    }
`;
export const ButtonBlock = styled.div`
    margin-top: 20px;
    border: 1px solid #616e7c;
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
    background-color: #1f2933;
    border: 1px solid #616e7c;
    box-shadow: 0 1px 5px 0 #616e7c;
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
    color: #fff;
`;
export const PriceText = styled.span`
    color: ${color};
`;
export const PriceBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const PriceValue = styled.span`
    font-size: ${h2};
    color: #fff;
`;
export const BadgeBlock = styled.div`
    margin-top: 15px;
`;
export const PriceDescription = styled.span`
    text-align: center;
    font-size: 18px;
    color: #fff;
`;

export const LineDiv = styled.div`
    width: 100%;
    height: 1px;
    background-color: #616e7c;
    margin-top: 10px;
`;