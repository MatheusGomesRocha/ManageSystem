import styled from 'styled-components';
import {h3} from '../Config';

export const Container = styled.div`
    height: 100vh;
    background-color: #1f2933;
    display: flex;
`;


export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    height: 80px;
    width: 500px;
`;
export const HeaderInput = styled.input`
    width: 90%;
    background-color: #616e7c;
    height: 40px;
    border-radius: 25px;
    border: none;
    color: #fff;
    padding: 10px;
    font-size: 18px;

    :focus {
        outline: none;
    }

    ::placeholder {
        color: #ccc;
    }
`;


export const Menu = styled.div`
    width: 250px;
    background-color: #616e7c;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const MenuTop = styled.div`
    display: flex;
    flex-direction: column;
    
`;
export const MenuBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;
export const MenuTitle = styled.span`
    font-size: 25px;
    color: #fff;
    margin: 20px 0 50px 0;
    padding-left: 20px;
`;
export const MenuBtn = styled.a`
    font-size: 22px;
    color: #fff;
    margin-top: 5px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 50px;
    border-radius: 20px;

    :hover {
        cursor: pointer;
        background-color: #1f2933;
    }
`;
export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
`;


