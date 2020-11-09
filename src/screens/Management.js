import React from 'react';

import { useMediaQuery } from 'react-responsive';

import SettingIcon from '../svg/settings';
import BoxIcon from '../svg/caixa';
import UserIcon from '../svg/users';
import OrderIcon from '../svg/orders';
import MessageIcon from '../svg/message';
import img from '../img/pc1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Button} from '@material-ui/core';

import {
  Container,

  Header,
  HeaderInput,

  Menu,
  MenuTop,
  MenuBottom,
  MenuTitle,
  MenuBtn,

  MiddleContent,
  UserImg,
} from './ManagementStyled';

const drawerWidth = 240;

let array = [
  { id: '1', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '1' }, adress: { rua: '1', bairro: '1' } },
  { id: '2', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '2' }, adress: { rua: '2', bairro: '2' } },
  { id: '3', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '3' }, adress: { rua: '3', bairro: '3' } },
  { id: '4', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '4' }, adress: { rua: '4', bairro: '4' } },
  { id: '5', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '5' }, adress: { rua: '5', bairro: '5' } },
  { id: '6', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '6' }, adress: { rua: '6', bairro: '6' } },
  { id: '7', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '7' }, adress: { rua: '7', bairro: '7' } },
  { id: '8', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', order: { products: '8' }, adress: { rua: '8', bairro: '8' } },
]



export default function Management() {

  const isMobileDevice = useMediaQuery({
    query: '(max-width: 750px)'
  });

  const MenuDesktop = () => {
    return (
      <Menu>
        <MenuTop>
          <MenuTitle>SeuMercado</MenuTitle>

          <MenuBtn>
            <OrderIcon />
            Orders
          </MenuBtn>

          <MenuBtn>
            <BoxIcon />
            Products
          </MenuBtn>

          <MenuBtn>
            <UserIcon />
            Users
          </MenuBtn>

          <MenuBtn>
            <MessageIcon />
            Messages
          </MenuBtn>
        </MenuTop>

        <MenuBottom>
          <MenuBtn>
            <SettingIcon />
            Settings
          </MenuBtn>
          <MenuBtn>Log out</MenuBtn>
        </MenuBottom>
      </Menu>
    );
  }

  const TableContent = () => {
    return (
      <TableContainer style={{ borderRadius: 30, margin: '100px 5%', width: '60%', backgroundColor: '#616e7c' }} component={Paper}>
        <Table style={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor: '#3f51b5'}}>
              <TableCell style={{color: '#fff', fontSize: 18}}>User</TableCell>
              <TableCell align="center" style={{color: '#fff', fontSize: 18}}>Price</TableCell>
              <TableCell align="center" style={{color: '#fff', fontSize: 18}}>Order</TableCell>
              <TableCell align="center" style={{color: '#fff', fontSize: 18}}>Adress</TableCell>
              <TableCell align="center" style={{color: '#fff', fontSize: 18}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((row) => (
              <TableRow key={row.name}>
                <TableCell style={{color: '#fff', fontSize: 16}} component="th" scope="row">
                  <UserImg src={img} />
                  {row.userName}
                </TableCell>
                <TableCell align="center" style={{color: '#fff', fontSize: 16}}>R$ {row.orderPrice}</TableCell>
                <TableCell align="center" style={{color: '#fff', fontSize: 16}}><Button variant="contained" color="primary">Order</Button></TableCell>
                <TableCell align="center" style={{color: '#fff', fontSize: 16}}><Button variant="contained" color="primary">Adress</Button></TableCell>
                <TableCell align="center" style={{color: '#fff', fontSize: 16}}><Button variant="contained" style={{backgroundColor: '#d32f2f', color: '#fff'}}>Excluir</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Container>
      <MenuDesktop />

      <TableContent />

    </Container>
  );
}
