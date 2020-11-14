import React, { useState, useEffect } from 'react';
import Api from '../Api';
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
import PlusIcon from '../svg/plus';
import EnterIcon from '../svg/enter';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import img from '../img/pc2.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import { Button, Modal, Fade, TextField } from '@material-ui/core';

import {
  Container,
  MiddleContent,

  Header,
  HeaderTitle,

  Menu,
  MenuTop,
  MenuBottom,

  TableHeader,
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
  BtnBlock,

  Form
} from './ManagementStyled';

let array = [
  { id: '1', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: [{ id: '2', name: 'Bife', price: 28.00, quantidade: 3 }, { id: '5', name: 'SobreCoxa', price: 28.00, quantidade: 3 }], adress: { rua: '1', bairro: '1' } },
  { id: '2', userName: 'teste1', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '9', name: 'Flocos', price: '14,00', quantidade: '4' }, adress: { rua: '2', bairro: '2' } },
  { id: '3', userName: 'teste2', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '3', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '3', bairro: '3' } },
  { id: '4', userName: 'teste3', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '4', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '4', bairro: '4' } },
  { id: '5', userName: 'teste4', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '5', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '5', bairro: '5' } },
  { id: '6', userName: 'teste5', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '6', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '6', bairro: '6' } },
  { id: '7', userName: 'teste6', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '7', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '7', bairro: '7' } },
  { id: '8', userName: 'teste7', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '8', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '8', bairro: '8' } },
];

let array1 = [
  { id: '1', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: [{ id: '2', name: 'Bife', price: 28.00, quantidade: 3 }, { id: '5', name: 'SobreCoxa', price: 28.00, quantidade: 3 }], adress: { rua: '1', bairro: '1' } },
  { id: '2', userName: 'teste1', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '9', name: 'Flocos', price: '14,00', quantidade: '4' }, adress: { rua: '2', bairro: '2' } },
]


let array2 = [
  { id: '1', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: [{ id: '2', name: 'Bife', price: 28.00, quantidade: 3 }, { id: '5', name: 'SobreCoxa', price: 28.00, quantidade: 3 }], adress: { rua: '1', bairro: '1' } },
]

let array3 = [
  { id: '1', userName: 'teste', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: [{ id: '2', name: 'Bife', price: 28.00, quantidade: 3 }, { id: '5', name: 'SobreCoxa', price: 28.00, quantidade: 3 }], adress: { rua: '1', bairro: '1' } },
  { id: '2', userName: 'teste1', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '9', name: 'Flocos', price: '14,00', quantidade: '4' }, adress: { rua: '2', bairro: '2' } },
  { id: '3', userName: 'teste2', userImg: '../img/pc1.jpg', orderPrice: '87,50', products: { id: '3', name: 'SobreCoxa', price: '28,00', quantidade: '3' }, adress: { rua: '3', bairro: '3' } },
]



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: '#aaa',
    borderBottom: '1px solid #aaa'
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const MenuBtn = withStyles({
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

const FilterBtn = withStyles({
  root: {
    height: 30,
    backgroundColor: '#eee',
    marginLeft: 10,
    padding: 10,
    color: '#888',

    '&:hover': {
      backgroundColor: '#ddd',
    }
  },
})(Button);

const TableBtn = withStyles({
  root: {
    backgroundColor: '#0C4BCC',
  }
})(Button);

const TableDeleteBtn = withStyles({
  root: {
    backgroundColor: '#FE5A74',
  }
})(Button);

const CssTextField = withStyles({
  root: {
    '& label': {
      color: '#aaa',
    },
    '& label.Mui-focused': {
      color: '#4361EE',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#aaa',
      },
      '&:hover fieldset': {
        borderColor: '#aaa',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4361EE',
      },
    },

    color: '#aaa',
    width: '100%',
  },
})(TextField);

const SelectBy = withStyles({
  root: {
    minWidth: 100,
    backgroundColor: '#eee'
  }
})(Select);

export default function Management() {
  const [open, setOpen] = useState(false);
  const [openAdress, setOpenAdress] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState([]);
  const [adress, setAdress] = useState([]);
  const [path, setPath] = useState('Orders');
  const [showInput, setShowInput] = useState(false);
  const [mainArray, setMainArray] = useState([]);


  useEffect(() => {
    const getOrders = async () => {
      let res = await Api.getOrders();
      setMainArray(res);
    }

    getOrders();
  }, [])

  const isMobileDevice = useMediaQuery({
    query: '(max-width: 750px)'
  });

  // Container de toda a Tabela - Está aqui pq precisa usar o isMobileDevice para deixar responsiva
  const TableBlock = withStyles({
    root: {
      padding: 25,
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: isMobileDevice ? '60px 5% 100px 5%' : '50px 3% 50px 3%',
      width: isMobileDevice ? '80%' : '90%',
      minHeight: 800,
    }
  })(TableContainer);

  const AddBtn = withStyles({
    root: {
      backgroundColor: '#00CA80',
      padding: 20,
      fontSize: 16,
      height: 50,
      width: '200px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',

      '&:hover': {
        backgroundColor: '#008353',
      }
    }
  })(Button);

  const currentScreen = (e) => {
    setPath(e);
  }

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleAdress = (adress) => {
    setOpenAdress(true);
    setAdress(adress);
  };

  const handleOpen = (product) => {
    setOpen(true);
    setProducts(product);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAdd(false);
  };

  const MenuDesktop = () => {
    return (
      <Menu>
        <MenuTop>
          <MenuBtn style={{ marginBottom: 25, marginTop: 0 }}>
            <MenuIcon />
            {/* Orders */}
          </MenuBtn>

          <MenuBtn style={{ backgroundColor: path == 'Orders' && '#00CA80' }} onClick={() => currentScreen('Orders')}>
            <OrderIcon />
            {/* Orders */}
          </MenuBtn>

          <MenuBtn style={{ backgroundColor: path == 'Products' && '#00CA80' }} onClick={() => currentScreen('Products')}>
            <BoxIcon />
            {/* Products */}
          </MenuBtn>

          <MenuBtn style={{ backgroundColor: path == 'Users' && '#00CA80' }} onClick={() => currentScreen('Users')}>
            <UserIcon />
            {/* Users */}
          </MenuBtn>

          <MenuBtn style={{ backgroundColor: path == 'Messages' && '#00CA80' }} onClick={() => currentScreen('Messages')}>
            <MessageIcon />
            {/* Messages */}
          </MenuBtn>
        </MenuTop>

        <MenuBottom>
          <MenuBtn style={{ backgroundColor: path == 'Settings' && '#00CA80' }} onClick={() => currentScreen('Settings')}>
            <SettingIcon />
            {/* Settings */}
          </MenuBtn>

          <MenuBtn>
            <LogoutIcon />
            {/* Log out */}
          </MenuBtn>
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

  // Modal para mostrar as infos dos pedidos
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
              <Button color="secondary" variant="contained" style={{ width: '50%', height: '60px' }}> Ajuda </Button>
              <Button color="secondary" variant="contained" style={{ width: '50%', height: '60px' }}> Detalhes </Button>
            </BtnBlock>
          </div>

        </Fade>
      </Modal>
    );
  }

  const ModalAdress = () => {
    return (
      null
    )
  }

  // Modal para mostrar form de adicionar produtos
  const ModalAddItem = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAdd}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 1000,
        }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

      >
        <Fade in={openAdd} style={{
          backgroundColor: '#fff', height: 300, width: '50%', display: 'grid', gridGap: 15, gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', alignItems: 'center',
          justifyContent: 'center', padding: 25
        }}>

          <Form>
            <CssTextField style={{ gridArea: '1 / 1 / 2 / 6' }} variant="outlined" type="text" label="Product Name*" />
            <CssTextField style={{ gridArea: '2 / 1 / 3 / 3' }} variant="outlined" type="text" label="Type*" />
            <CssTextField style={{ gridArea: '2 / 4 / 3 / 6' }} variant="outlined" type="number" label="Price*" />
            <CssTextField style={{ gridArea: '3 / 1 / 4 / 6' }} variant="outlined" type="textfield" label="Description*" />

            <AddBtn style={{ gridArea: '5 / 1 / 6 / 6', width: '100%' }}>
              Add Product
            </AddBtn>
          </Form>

        </Fade>
      </Modal>
    );
  }

  const TableContent = () => {
    return (
      <TableBlock component={Paper}>

        <TableHeader>
          <TableTitle>List of {path}</TableTitle>

          <AddBtn onClick={() => setOpenAdd(true)}>
            <PlusIcon />
            New Product
          </AddBtn>

          <ModalAddItem />

        </TableHeader>

        <TableSubHeader>
          <DivInput>

            <Button onClick={() => setShowInput(!showInput)} >
              <SearchIcon />
            </Button>

            <Grow style={{ width: showInput ? '100%' : 0, marginLeft: showInput ? 10 : 0 }} timeout={1000} in={showInput}>
              <TableInput placeholder="Search" />
            </Grow>
          </DivInput>


          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Sort By</InputLabel>
            <SelectBy
              native
              value={sort}
              onChange={handleSort}
              label="Age"
              inputProps={{
                name: 'Sort',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value="user">User</option>
              <option value="status">Status</option>
              <option value="subtotal">Subtotal</option>
              <option value="Date">Subtotal</option>
            </SelectBy>
          </FormControl>




        </TableSubHeader>

        <Table style={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>User</StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Status</StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Subtotal</StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Order</StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>Adress</StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>#</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {mainArray.map((item) => (
              <StyledTableRow key={item.id}>

                <StyledTableCell style={{ fontSize: 18 }}>
                  <UserImg src={img} />
                  {item.userName}
                </StyledTableCell>

                <StyledTableCell align="center">Entregue</StyledTableCell>

                <StyledTableCell align="center">R$ {item.subtotal.toFixed(2)}</StyledTableCell>

                <StyledTableCell align="center">
                  <TableBtn onClick={() => handleOpen(item.products)} variant="contained">
                    <EnterIcon />
                  </TableBtn>
                </StyledTableCell>

                <StyledTableCell align="center">
                  <TableBtn onClick={() => handleAdress(item.adress)} variant="contained">
                    <EnterIcon />
                  </TableBtn>
                </StyledTableCell>

                <StyledTableCell align="center">
                  <TableDeleteBtn onClick={() => handleOpen(item.products)} variant="contained">
                    <DeleteIcon />
                  </TableDeleteBtn>
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <ModalItem />

      </TableBlock>
    );
  }

  return (
    <Container>

      {isMobileDevice ?
        null
        : <MenuDesktop />
      }

      <MiddleContent>
        <HeaderContent />
        <TableContent />
      </MiddleContent>

    </Container>
  );
}
