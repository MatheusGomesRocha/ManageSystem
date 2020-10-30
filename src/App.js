import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.div`
  background: linear-gradient(to right, #4b6cb7, #182848);
  font-family: Roboto;
  align-items: center;
`;

const Top = styled.div`
  height: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  @media(min-width: 300px) and (max-width: 679px) {
    display: none;
  }
`;
const TopLeft = styled.div`
  margin-left: 50px;
`;
const TopTitle = styled.span`
  font-size: 30px;
  color: #fff;
`;

const TopRight = styled.div`
  display: flex;
  margin-right: 50px;
`;

const EmailDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const TopText = styled.span`
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  border-right: ${props => props.bRight || 'none'}
`;


const Bottom = styled.div`
  min-height: 500px;
  align-items: center;
  display: flex;
  @media(min-width: 300px) and (max-width: 679px) {
    flex-direction: column;
    padding: 30px 15px;
  }
  @media(min-width: 680px) {
    align-items: center;
    justify-content: space-between;
  }
  
`;


const Left = styled.div`
  @media(min-width: 300px) and (max-width: 679px) {
    width: 100%;
  }
  @media(min-width: 680px) {
    margin-left: 50px;
    width: 50%;
  }
`;
const LeftTitle = styled.h1`
  color: #fff;
  font-size: 50px;
  width: 80%;
  @media(min-width: 300px) and (max-width: 679px) {
    width: 100%;
    font-size: 35px;
    text-align: center;
  }
`;
const LeftText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 22px;
  width: 80%;
  @media(min-width: 300px) and (max-width: 679px) {
    width: 100%;
    font-size: 20px;
    text-align: center;
  }
`;


const Form = styled.form`
  height: 400px;
  
  background-color: #fff;
  box-shadow-color: red;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media(min-width: 300px) and (max-width: 679px) {
    margin-top: 15px
  }
  
  @media(min-width: 680px) {
    margin-right: 50px;
    width: 400px
  }
`;

const TitleForm = styled.span`
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  width: 80%;
  height: 30px;
  padding: 10px;
  margin-top: 25px;
  font-size: 18px;
  transition: 0.5s;
`;

const InputBtn = styled.input`
  background: linear-gradient(to right, #4b6cb7, #182848);
  margin-top: 25px;
  height: 50px;
  width: 80%;
  border-radius: 25px;
  border: none;
  color: #fff;
  font-size: 18px;
  outline: 0px;
  transition: 0.2s;
`;



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (p) => {
    setPassword(p.target.value)
  }

  const handleSubmit = () => {
    console.log(email, password)
  }

  const EmailSvg = () => {
    return (
      <svg height="22px" width="22px" fill="rgba(255, 255, 255, 0.5)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512"  >
        <g>
          <g>
            <polygon points="43.52,76.8 256,225.28 468.48,76.8 		" />
          </g>
        </g>
        <g>
          <g>
            <path d="M268.8,276.48c-7.68,5.12-20.48,5.12-28.16,0L0,107.52V409.6c0,12.8,12.8,25.6,25.6,25.6h460.8
			c12.8,0,25.6-12.8,25.6-25.6V107.52L268.8,276.48z"/>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
    );
  }

  return (
    <Container id="app" fluid>

      <Header>
        <Top>
          <TopLeft>
            <TopTitle>SeuMercado</TopTitle>
          </TopLeft>

          <TopRight>
            <TopText bRight="1px solid rgba(255, 255, 255, 0.4)">alsmakmsakma</TopText>
            <EmailDiv>
              <EmailSvg />
              <TopText>Emai@hotmail.com</TopText>
            </EmailDiv>
          </TopRight>
        </Top>

        <Bottom>
          <Left>
            <LeftTitle>Sistema de Gerenciamento SeuMercado</LeftTitle>
            <LeftText>
              Sistema feito para Supermercados, Mercadinhos e Mercantis com o intuíto com que o contratante gerencie seus Produtos, Tráfego de usuários e pedidos feitos
              em seu estabelecimento. App SeuMercado disponível na PlayStore.
              </LeftText>
          </Left>

          <Form>
            <TitleForm>Faça seu login</TitleForm>

            <TextField
              style={{ marginTop: 20, width: "80%" }}
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: 20, width: "80%" }}
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <InputBtn id="btn" type="submit" value="Finalizar" onChange={handleSubmit} />
          </Form>

        </Bottom>
<svg style={{display: 'flex', marginTop: -350}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,240C672,256,768,224,864,192C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </Header>



      
    </Container>
  );
}


export default App;