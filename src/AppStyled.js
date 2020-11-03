import styled from 'styled-components';
import { h1, h2, h3, span, color, paddingMobile, padding } from './Config';
import bg_img from './img/pc1.jpg';

export const Container = styled.div`
    font-family: roboto;
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
    padding-top: 10px;
    background-color: rgba(0, 0, 0, 0.5);

    @media(max-width: 800px) {
        display: none;
    }
`;
export const HeaderText = styled.span`
    font-size: ${h2};
    margin-left: 20%;
    color: #fff;
    
    @media(min-width: 1501px) {
        margin-left: 25%;
    }
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
    background-color: #7851A9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
`;
export const WhoAreTitle = styled.span`
    font-size: ${h1};
    color: #fff;
`;
export const LineDiv = styled.div`
    width: 10%;
    height: 2px;
    background-color: ${props=>props.color || '#fff'};
    margin-top: 5px;
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
    border: 1px solid #7851A9;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #7851A9;
    transition: 200ms;
	background-color: #7851A9;

    :hover {
        margin-top: -5px;
        box-shadow: 0 0 15px 0 #7851A9;
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
    color: #fff;
    font-size: ${span};
    margin: 10px 20px;
`;


/** PRICE CONTENT */
export const Price = styled.div`
    display: flex;
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
        padding: 20px 10%;
    }

    @media(min-width: 1500px) {
        padding: 20px 0;
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
    font-size: ${span};
    width: 70%;
    margin-top: 15px;

    @media(max-width: 601px) {
        width: 100%;
        text-align: center;
    }
`;


/** FORM CONTENT */
export const FormDiv = styled.div``;
export const FormBlock = styled.div``;
export const FormTitle = styled.span``;
export const FormText = styled.span``;
export const Form = styled.form``;