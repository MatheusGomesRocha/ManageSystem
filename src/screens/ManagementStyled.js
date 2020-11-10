import styled from 'styled-components';
import {h3, primary, secondary} from '../Config';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: ${primary};
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
    background-color: ${secondary};
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
    margin: 20px 0 50px 0;
    padding-left: 20px;
    color: #fff;
`;
export const MenuBtn = styled.a`
    font-size: 22px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 55px;
    border-radius: 23px;
    color: #fff;

    :hover {
        cursor: pointer;
        background-color: #1334C8;
    }
`;
export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
`;



export const MiddleContent = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const OrderBy = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;
export const OrderByTitle = styled.span`
    font-size: 25px;
    font-weight: bold
`;

export const UserImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 25px;
`;



export const ProductHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-bottom: 1px solid #ddd;
`;
export const ProductText = styled.span`
    font-size: 18px;
`;
export const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100px;
    justify-content: center;
    padding-left: 20px;
    border-bottom: 1px solid #ddd;
`;
export const ProductItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;
export const ProductQtd = styled.span`
    font-size: 20px;
    text-align : center;    
`;
export const BtnBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
`;