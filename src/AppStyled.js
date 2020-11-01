import styled from 'styled-components';
import { h2, h3, color, paddingMobile, padding } from './Config';

export const Container = styled.div``;


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
`;


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