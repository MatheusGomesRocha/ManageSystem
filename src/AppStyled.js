import styled from 'styled-components';
import { h1, h2, h3, span, color, paddingMobile, padding } from './Config';

export const Container = styled.div`
    font-family: roboto;
    background-color: #7844B2;
`;


/** HEADER CONTENT */
export const Header = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
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
export const SubHeader = styled.div`
    margin-bottom: -5px;
`;
export const BgDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 800px;
    background-color: rgba(0, 0, 0, 0.2);

    @media(min-width: 300px) and (max-width: 700px) {
        height: 400px;
    }

    @media(min-width: 701px) and (max-width: 1000px) {
        height: 600px;
    }
`;
export const Img = styled.img`
    width: 100%;   
    height: 800px;
    

    @media(min-width: 300px) and (max-width: 700px) {
        height: 400px;
    }

    @media(min-width: 701px) and (max-width: 1000px) {
        height: 600px;
    }
`;
export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;

    @media(min-width: 300px) and (max-width: 800px) {
        width: 80%;
        padding: ${paddingMobile};
        top: 40px;
    }

    @media(min-width: 801px) {
        top: 200px;
        width: 70%;
        padding: 0 15%;
    }
`;
export const Title = styled.span`
    text-align: center;
    font-size: ${h1};
    color: #fff;
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
    min-height: 200px;

    @media(max-width: 800px) {
        height: auto;
        padding: ${paddingMobile};
    }
`;
export const WorkWithTitle = styled.span`
    font-size: ${h3};
    margin-bottom: 10px;
    text-align: center;
    color: #fff;

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
    display: flex;
    justify-content: center;
    padding-top: 100px;
`;
export const WeDoTitle = styled.span`
    font-size: ${h1};
    text-align: center;
    font-weight: bold;
    color: #fff;
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
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #000;
    transition: 200ms;
	background-color: #000;

    :hover {
        margin-top: -5px;
        box-shadow: 0 0 15px 0 #000;
    }

    @media(min-width: 1501px) {
        width: 350px;
    }
`;
export const WeDoText = styled.span`
    font-size: ${h3};
    margin: 10px 0;
	color: #7851A9;
`;
export const WeDoSubtext = styled.span`
    text-align: center;
    color: #7851A9;
    font-size: ${span};
    margin: 10px 20px;
`;


/** PRICE CONTENT */
export const Price = styled.div`
    display: flex;
	background-color: #000;
    
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
    color: #7851A9;

    @media(max-width: 600px) {
        text-align: center;
        margin-bottom: 10px;
    }
`;
export const PriceText = styled.span`
    color: #7851A9;
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