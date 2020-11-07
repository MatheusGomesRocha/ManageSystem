import styled from 'styled-components';
import { h1, h2, h3, span, color, paddingMobile, padding } from '../Config';
import bg_img from '../img/pc1.jpg';
export const Container = styled.div`
    background-color: #1f2933;
`;


/** HEADER CONTENT */
export const Header = styled.div`
    background-image: url(${bg_img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 800px) {
        justify-content: center;
    }
`;
export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: ${props=>props.bgHeader || 'transparent'};
    z-index: 999;

    @media(max-width: 800px) {
        display: none;
    }
`;
export const HeaderBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: 1000ms;
`;
export const HeaderText = styled.span`
    font-size: ${h2};
    margin-left: 20%;
    color: #fff;
    
    @media(min-width: 1501px) {
        margin-left: 25%;
    }
`;
export const HeaderLink = styled.a`
    text-decoration: none;
    font-size: ${span};
    color: #fff;
    margin-right: 20px;
    color: ${props=>props.color};
`;


/** SUBHEADER CONTENT */
export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;

    @media(min-width: 300px) and (max-width: 800px) {
        padding: ${paddingMobile}
        top: 40px;
    }

    @media(min-width: 801px) {
        padding: 0 15%;
    }
`;
export const Title = styled.span`
    text-align: center;
    font-size: ${h1};
    color: #fff;
    margin-bottom: 20px;

    @media(min-width: 300px) and (max-width: 800px) {
        width: 90%;
    }
`;
export const SubTitle = styled.span`
    text-align: center;
    color: ${color};
    margin-top: 10px;
    font-size: ${span};

    @media(min-width: 300px) and (max-width: 800px) {
        width: 90%;
    }
`;


/* WHO WE ARE CONTENT */
export const WhoAre = styled.div`
    height: 400px;
    background-color: #616e7c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;

    @media(max-width: 700px) {
        padding: 20% 10%;
    }
`;
export const WhoAreTitle = styled.span`
    font-size: ${h1};
    color: #fff;
`;
export const WhoAreText = styled.span`
    font-size: ${span};
    color: #fff;
    margin-top: 20px;
    text-align: center;
`;


/* WE DO CONTENT */
export const WeDoTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`;
export const WeDoTitle = styled.span`
    font-size: ${h1};
    color: #fff;
    text-align: center;
    font-weight: bold;
`;
export const WeDo = styled.div`
    display: grid;
    grid-gap: 30px;
    padding: 40px 15px;

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
        padding-bottom: 100px;
    }
`;
export const WeDoBlock = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #616e7c;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #616e7c;
    transition: 200ms;

    :hover {
        margin-top: -5px;
        box-shadow: 0 0 15px 0 #616e7c;
    }

    @media(min-width: 1501px) {
        width: 350px;
    }
`;
export const WeDoText = styled.span`
    font-size: ${h3};
    margin: 10px 0;
    color: #fff;
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
    justify-content: center;
    align-items: center;
    
    @media(max-width: 800px) {
        flex-direction: column;
        padding: 20px 10%;
    }

    @media(min-width: 801px) {
        padding: ${padding};
        grid-template-columns: auto auto;
    }

    @media(min-width: 900px) {
        padding: 20px 10%;
    }

    @media(min-width: 1500px) {
        padding: 20px 0;
        justify-content: center;
    }
`;
export const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(max-width: 601px) {
        margin-bottom: 50px;
    }

    @media(min-width: 1500px) {
        width: 25%;
    }
`;
export const PriceTitle = styled.span`
    font-size: 45px;
    color: #fff;

    @media(max-width: 800px) {
        margin-bottom: 10px;
        text-align: center;
    }
`;
export const PriceText = styled.span`
    font-size: ${span};
    color: ${color};
    width: 50%;
    margin-top: 15px;

    @media(max-width: 801px) {
        width: 100%;
        text-align: center;
    }
`;


/** FORM CONTENT */
export const FormDiv = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 50px;

    @media(max-width: 800px) {
        margin-top: 100px;
        flex-direction: column;
    }
`;
export const FormBlock = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 800px) {
        width: 90%;
        margin-bottom: -150px;
    }
`;
export const FormTitle = styled.span`
    font-size: ${h1};
    text-align: center;
    color: #fff;
`;
export const FormText = styled.span`
    font-size: ${span};
    color: ${color};
    text-align: center;
    margin-top: 15px;
`;
export const Form = styled.form`
    padding: 0 5%;
    border: 1px solid #616e7c;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #616e7c;
    background-color: #1f2933;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 400px;
    margin-top: 100px;

    :hover {
        box-shadow: 0 0 15px 0 #616e7c;
    }

    @media(max-width: 800px) {
        width: 70%;
        padding: 5% 10%;
        margin-top: 200px;
    }
`;
export const FormPurple = styled.div`
    height: 200px;
    background-color: #616e7c;
`;


export const LineDiv = styled.div`
    width: 50px;
    height: 2px;
    background-color: #616e7c;
    margin-top: 5px;
`;