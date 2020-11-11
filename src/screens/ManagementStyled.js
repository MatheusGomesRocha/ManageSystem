import styled from 'styled-components';
import { h3, primary, secondary } from '../Config';

export const Container = styled.div`
    background-color: ${primary};
    display: flex;
    background-color: #eee;
`;
export const MiddleContent = styled.div`
    width: 100%;
`;


export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 0 1px 0 #000;
`;
export const HeaderTitle = styled.span`
    font-size: ${h3};
    text-align: center;
`;



export const Menu = styled.div`
    width: 100px;
    height: auto;
    background-color: ${secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const MenuTop = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;
export const MenuBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
`;



export const TableHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 750px) {
        flex-direction: column;
    }
`;
export const TableTitle = styled.span`
    font-size: ${h3};
    font-weight: bold;

    @media(max-width: 750px) {
        margin-bottom: 15px;
    }
`;
export const TableSubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;

    @media(max-width: 750px) {
        flex-direction: column;
    }
`;
export const DivInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    height: 30px;
    border-radius: 5px;
    padding: 10px;

    @media(max-width: 750px) {
        margin-bottom: 15px;
    }
`;
export const TableInput = styled.input`
    border: none;
    background-color: transparent;
    font-size: 16px;
    height: 30px;

    :focus {
        outline: none;
    }
`;


export const DivFilter = styled.div``;

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