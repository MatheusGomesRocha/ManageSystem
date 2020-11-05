import styled from 'styled-components';
import { h1, h2, h3, span, color, paddingMobile, padding } from './Config';
import bg_img from './img/pc1.jpg';

export const Container = styled.div`
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
`;
export const HeaderText = styled.span`
    font-size: ${h2};
    margin-left: 20%;
    color: ${props=>props.colorHeader};

    @media(min-width: 1501px) {
        margin-left: 25%;
    }
`;
export const HeaderLink = styled.a`
    color: ${props=>props.colorHeader || '#fff'};
    text-decoration: none;
    font-size: ${span};
    margin-right: 20px;
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

    @media(max-width: 700px) {
        padding: 20% 10%;
    }
`;
export const WhoAreTitle = styled.span`
    font-size: ${h1};
    color: #fff;
`;
export const LineDiv = styled.div`
    width: 50px;
    height: 2px;
    background-color: ${props => props.color || '#fff'};
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
	background-color: #7851A9;

    :hover {
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
    background-color: #fff;
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

    @media(max-width: 800px) {
        margin-bottom: 10px;
        text-align: center;
    }
`;
export const PriceText = styled.span`
    font-size: ${span};
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
`;
export const FormText = styled.span`
    font-size: ${span};
    color: ${color};
    text-align: center;
    margin-top: 15px;
`;
export const Form = styled.form`
    padding: 0 5%;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #ddd;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
    margin-top: 100px;

    :hover {
        box-shadow: 0 0 15px 0 #ddd;
    }

    @media(max-width: 800px) {
        width: 70%;
        padding: 5% 10%;
        margin-top: 200px;
    }
`;
export const FormPurple = styled.div`
    height: 200px;
    background-color: #7851A9;
`;


/** FOOTER AREA */
export const Footer = styled.div`
    min-height: 300px;
    background-color: #452E60;
    display: flex;

    @media(max-width: 750px) {
        display: grid;
        flex-direction: column;
        grid-template-columns: auto auto;
        padding: 30px 10%;
    }

    @media(min-width: 751px) {
        align-items: center;
        justify-content: center; 
    }
`;
export const ContactBlock = styled.div`
    @media(max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #452E60;
        padding: 15px;
    }
`;
export const ContactText = styled.span`
    color: #fff;
    font-size: ${h3};
`;
export const ContactLink = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;
export const FooterBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 25px;
    min-height: 150px;

    @media(max-width: 750px) {
        margin-bottom: 30px;
    }
`;
export const FooterTitle = styled.span`
    color: #fff;
    font-size: ${h3};
`;
export const FooterLink = styled.a`
    color: ${color};
    text-decoration: none;
    margin-top: 10px;
`;