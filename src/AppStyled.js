import styled from 'styled-components';
import { h1, h2, h3, span, color, paddingMobile, padding } from './Config';

export const Container = styled.div`
    font-family: roboto;
`;


/** HEADER CONTENT */
export const Header = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;

    @media(max-width: 800px) {
        display: none;
    }
`;
export const HeaderText = styled.span`
    font-size: ${h2};
    margin-left: 20%;

    @media(min-width: 1501px) {
        margin-left: 25%;
    }
`;


/** SUBHEADER CONTENT */
export const SubHeader = styled.div`
    margin-bottom: -3px;
`;
export const Img = styled.img`
    width: 100%;    
    height: 480px;
`;
export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;

    @media(max-width: 800px) {
        width: 80%;
        padding: ${paddingMobile};
        top: 40px;
    }

    @media(min-width: 801px) {
        top: 110px;
        width: 60%;
        padding: ${padding}
    }
`;
export const Title = styled.span`
    text-align: center;
    font-size: ${h2}
`;
export const SubTitle = styled.span`
    text-align: center;
    color: ${color};
    margin-top: 10px;
    font-size: ${span}
`;


/* WORK WITH CONTENT */
export const WorkWith = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    height: 150px;

    @media(max-width: 800px) {
        height: auto;
        padding: ${paddingMobile};
    }
`;
export const WorkWithTitle = styled.span`
    font-size: ${h3};
    margin-bottom: 10px;
    text-align: center;

    @media(max-width: 800px) {
        margin: 15px 0;
    }
`;
export const WorkWithBlock = styled.div`
    width: 15%;

    @media(max-width: 700px) {
        padding: ${paddingMobile};
        width: 80%;
    }

    @media(min-width: 701px) {
        display: flex;
        justify-content: center;
    }
`;
export const WorkWithImg = styled.img`
    width: 100px;
    height: 80px;
    margin-left: 10px;
    
    @media(max-width: 700px) {
        width: 100px;
    }
`;


/* WE DO CONTENT */
export const WeDoTitleDiv = styled.div`
    margin: 100px 0 40px 0;
    display: flex;
    justify-content: center;
`;
export const WeDoTitle = styled.span`
    font-size: ${h1};
    text-align: center;
    font-weight: bold;
`;
export const WeDo = styled.div`
    display: grid;
    grid-gap: 30px;
    margin: 50px 15px;

    @media(min-width: 300px) {
        grid-template-columns: auto;
    }

    @media(min-width: 601px) {
        grid-template-columns: auto auto;
    }

    @media(min-width: 1001px) {
        grid-template-columns: auto auto auto;
    }

    @media(min-width: 1501px) {
        justify-content: center;
        margin-bottom: 100px;
    }
`;
export const WeDoBlock = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #ddd;
    transition: 200ms;

    :hover {
        margin-top: -5px;
        box-shadow: 0 0 15px 0 #aaa;
    }

    @media(min-width: 1501px) {
        width: 350px;
    }
`;
export const WeDoText = styled.span`
    font-size: ${h3};
    margin: 10px 0;
`;
export const WeDoSubtext = styled.span`
    text-align: center;
    color: ${color};
    font-size: ${span};
    margin: 10px 20px;
`;


/** PRICE CONTENT */
export const Price = styled.div`
    display: flex;
    background-color: #eee;
    align-items: center;

    @media(max-width: 600px) {
        flex-direction: column;
        padding: 50px 10%;
    }

    @media(min-width: 601px) {
        padding: ${padding};
    }

    @media(min-width: 765px) {
        padding: 20px 50px;
    }

    @media(min-width: 900px) {
        padding: ${padding}
    }

    @media(min-width: 1500px) {
        justify-content: center;
    }
`;
export const PriceBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(max-width: 601px) {
        margin-bottom: 50px;
    }

    @media(min-width: 1500px) {
        width: 25%;
    }
`;
export const PriceTitle = styled.span`
    font-size: 45px;

    @media(max-width: 600px) {
        text-align: center;
        margin-bottom: 10px;
    }
`;
export const PriceText = styled.span`
    color: ${color};
    font-size: ${span};
    width: 70%;
    margin-top: 15px;

    @media(max-width: 601px) {
        width: 100%;
        text-align: center;
    }
`;