import styled from 'styled-components';
import { h1, h2, h3, span, color } from '../Config';

export const Container = styled.div`
    font-family: Sans-Serif;
`;


export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;

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
    justify-content: flex-start;
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
`;
export const ButtonBlock = styled.div`
    margin-top: 20px;
    border: 1px solid #fff;
`;


export const PriceContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: -150px 5% 0 5%;
`;
export const PriceBlock = styled.div`
    height: 500px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px 0 #ddd;
    border-radius: 5px;
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
`;
export const BadgeBlock = styled.div`
    margin-top: 15px;
`;
export const PriceDescription = styled.span`
    text-align: center;
    font-size: 18px;
`;

export const LineDiv = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin-top: 10px;
`;