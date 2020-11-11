import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { withStyles } from '@material-ui/core/styles';
import SettingIcon from '../svg/settings';
import BoxIcon from '../svg/caixa';
import UserIcon from '../svg/users';
import OrderIcon from '../svg/orders';
import MessageIcon from '../svg/message';
import DeleteIcon from '../svg/delete';
import LogoutIcon from '../svg/logout';
import MenuIcon from '../svg/menu';
import SearchIcon from '../svg/search';
import ArrowDownIcon from '../svg/arrow_down';

import img from '../img/pc2.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import { Button, Modal, Fade } from '@material-ui/core';

import {
  Container,
  MiddleContent,

  Header,
  HeaderTitle,

  Menu,
  MenuTop,
  MenuBottom,

  TableTitle,
  TableSubHeader,
  DivInput,
  TableInput,

  DivFilter,

  OrderBy,
  OrderByTitle,

  UserImg,

  ProductContent,
  ProductHeader,
  ProductText,
  ProductBlock,
  ProductItem,
  ProductQtd,
  BtnBlock
} from './ManagementStyled';

const drawerWidth = 240;

let array = [
  { id: '1', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: [{ id: '2', name: 'Bife', price: 28.00, quantidade: 3 }, { id: '5', name: 'SobreCoxa', price: 28.00, quantidade: 3 }], adress: { rua: '1', bairro: '1' } },
  { id: '2', userName: 'teste1', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '9', name: 'Flocos', price: '14,00', quantidade: '4' }, adress: { rua: '2', bairro: '2' } },
  { id: '3', userName: 'teste2', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '3', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '3', bairro: '3' } },
  { id: '4', userName: 'teste3', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '4', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '4', bairro: '4' } },
  { id: '5', userName: 'teste4', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '5', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '5', bairro: '5' } },
  { id: '6', userName: 'teste5', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '6', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '6', bairro: '6' } },
  { id: '7', userName: 'teste6', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '7', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '7', bairro: '7' } },
  { id: '8', userName: 'teste7', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '8', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '8', bairro: '8' } },
]

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: '#aaa',
    borderBottom: '1px solid #aaa'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DefaultBtn = withStyles({
  root: {
    fontSize: 22,
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    justifContent: 'center',
    height: 55,
    width: 55,
    bordeRradius: 10,
    color: '#fff',

    '&:hover': {
      backgroundColor: '#00CA80',
    }
  },
})(Button);

const FilterButton = withStyles({
  root: {
    height: 30,
    backgroundColor: '#eee',
    marginLeft: 10,
    padding: 10,

    '&:hover': {
      backgroundColor: '#ddd',
    }
  },
})(Button);


export default function Management() {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantidade, setProductQuantidade] = useState('');
  const [products, setProducts] = useState([]);
  const [path, setPath] = useState('Orders');
  const [showInput, setShowInput] = useState(false);

  const handleOpen = (product) => {
    setOpen(true);
    setProducts(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isMobileDevice = useMediaQuery({
    query: '(max-width: 750px)'
  });

  const MenuDesktop = () => {
    return (
      <Menu>
        <MenuTop>
          <DefaultBtn style={{ marginBottom: 25, marginTop: 0 }}>
            <MenuIcon />
            {/* Orders */}
          </DefaultBtn>

          <DefaultBtn style={{ backgroundColor: path == 'Orders' && '#00CA80' }} onClick={() => setPath('Orders')}>
            <OrderIcon />
            {/* Orders */}
          </DefaultBtn>

          <DefaultBtn style={{ backgroundColor: path == 'Products' && '#00CA80' }} onClick={() => setPath('Products')}>
            <BoxIcon />
            {/* Products */}
          </DefaultBtn>

          <DefaultBtn style={{ backgroundColor: path == 'Users' && '#00CA80' }} onClick={() => setPath('Users')}>
            <UserIcon />
            {/* Users */}
          </DefaultBtn>

          <DefaultBtn style={{ backgroundColor: path == 'Messages' && '#00CA80' }} onClick={() => setPath('Messages')}>
            <MessageIcon />
            {/* Messages */}
          </DefaultBtn>
        </MenuTop>

        <MenuBottom>
          <DefaultBtn style={{ backgroundColor: path == 'Settings' && '#00CA80' }} onClick={() => setPath('Settings')}>
            <SettingIcon />
            {/* Settings */}
          </DefaultBtn>

          <DefaultBtn>
            <LogoutIcon />
            {/* Log out */}
          </DefaultBtn>
        </MenuBottom>
      </Menu>
    );
  }

  const HeaderContent = () => {
    return (
      <Header>
        <HeaderTitle>SeuMercado</HeaderTitle>
      </Header>
    );
  }

  const ModalItem = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 1000,
        }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

      >
        <Fade in={open} style={{ backgroundColor: '#fff', minHeight: 220, width: 400 }}>

          <div>
            <ProductHeader>
              <ProductText>Pedido concluído - 4247</ProductText>
            </ProductHeader>

            <ProductBlock>
              {products.map((item) => (
                <ProductItem>
                  <div style={{ marginRight: 10, height: 22, width: 22, display: 'flex', border: '1px solid #ddd', alignItems: 'center', justifyContent: 'center' }}>
                    <ProductQtd>{item.quantidade}</ProductQtd>
                  </div>
                  <ProductText>{item.name} - R$ {(item.price * item.quantidade).toFixed(2)}</ProductText>

                </ProductItem>
              ))}
            </ProductBlock>

            <BtnBlock>
              <Button color="secondary" style={{ width: '50%', height: '60px' }}> Ajuda </Button>
              <Button color="secondary" style={{ width: '50%', height: '60px' }}> Detalhes </Button>
            </BtnBlock>
          </div>

        </Fade>
      </Modal>
    );
  }

  const TableContent = () => {
    return (
      <TableContainer style={{ padding: 25, backgroundColor: '#fff', borderRadius: 10, margin: '60px 50px 100px 0', width: '90%' }} component={Paper}>

        <TableTitle>List of {path}</TableTitle>

        <TableSubHeader>
          <DivInput>

            <Button onClick={() => setShowInput(!showInput)} >
              <SearchIcon />
            </Button>

            <Grow style={{ width: showInput ? '100%' : 0, marginLeft: showInput ? 10 : 0 }} timeout={1000} in={showInput}>
              <TableInput placeholder="Search" />
            </Grow>
          </DivInput>

          <DivFilter>

            <FilterButton>
              Filter by
              <ArrowDownIcon />
            </FilterButton>

            <FilterButton>
              Sort by
              <ArrowDownIcon />
            </FilterButton>

          </DivFilter>

        </TableSubHeader>

        <Table style={{ minWidth: 650, marginRight: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" style={{ fontSize: 18, fontWeight: 'bold' }}>User</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 18, fontWeight: 'bold' }}>Status</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 18, fontWeight: 'bold' }}>Subtotal</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 18, fontWeight: 'bold' }}>Order</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 18, fontWeight: 'bold' }}>Adress</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 18, fontWeight: 'bold' }}>#</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell style={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }} component="th" scope="row">
                  <UserImg src={img} />
                  {item.userName}
                </TableCell>
                <StyledTableCell align="center" style={{ fontSize: 18 }}>Entregue</StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: 18 }}>R$ {item.orderPrice}</StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: 18 }}><Button style={{ backgroundColor: '#0C4BCC' }} onClick={() => handleOpen(item.products)} variant="contained" color="primary"><DeleteIcon /></Button></StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: 18 }}><Button style={{ backgroundColor: '#0C4BCC' }} onClick={() => handleOpen(item.products)} variant="contained" color="primary"><DeleteIcon /></Button></StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: 18 }}><Button onClick={() => handleOpen(item.products)} variant="contained" style={{ backgroundColor: '#FE5A74', color: '#fff' }}><DeleteIcon /></Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <ModalItem />

      </TableContainer>
    );
  }

  return (
    <Container>
      <MenuDesktop />


      <MiddleContent>

        <HeaderContent />
        <TableContent />


      </MiddleContent>


    </Container>
  );
}
