import React, { useState } from 'react';
import { BackgroundLogin } from '../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';
import {
  Container,
  BrandDiv,
  Form,
  Label,
  Input,
  Submit,
} from '../styles/Pages/Login/Login';
import Logo from '../assets/img/canada-cannabyss-logo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const loginObj = {
      email, password,
    };
    console.log(loginObj);
  };

  return (
    <BackgroundLogin>
      <Container>
        <Form onSubmit={onSubmitLogin}>
          <BrandDiv>
            <img src={Logo} alt='Canada Cannabyss' />
            {/* <p>
              Canada
              <br />
              <span>Cannabyss</span>
            </p> */}
            <div className='sep' />
            <h1>Login</h1>
          </BrandDiv>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' value={email} onChange={onChangeEmail} />
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            value={password}
            onChange={onChangePassword}
          />
          <Submit type='submit'>Login</Submit>
        </Form>
      </Container>
    </BackgroundLogin>
  );
};

export default Login;
