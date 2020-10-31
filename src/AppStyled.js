import styled from 'styled-components';
import { h2, color } from './Config';

export const Container = styled.div``;


export const Header = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20% 0 20%;

    @media(max-width: 800px) {
        display: none;
    }
`;
export const HeaderText = styled.span`
    font-size: ${h2};
`;


export const SubHeader = styled.div``;
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
        margin: 0 10% 0 10%;
        top: 40px;
    }

    @media(min-width: 801px) {
        left: 20%;
        top: 110px;
        width: 60%;
    }
`;
export const Title = styled.span`
    text-align: center;
    font-size: ${h2}
`;
export const SubTitle = styled.span`
    text-align: center;
    color: ${color};

    @media(max-width: 800px) {
        margin-top: 10px;
    }
`;