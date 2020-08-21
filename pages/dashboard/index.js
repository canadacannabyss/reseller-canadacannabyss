import Head from 'next/head';
import React from 'react';
import Sidebar from '../../components/UI/Sidebar/Sidebar';

import {
  Wrapper,
  Container,
  ContainerTitle,
} from '../../styles/Pages/Dashboard/Dashboard';

import { PageContainer } from '../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';

const Dashboard = () => (
  <>
    <Head>
      <title>Dashboard | Reseller - Canada Cannabyss</title>
    </Head>
    <PageContainer>
      <Sidebar />
      <Wrapper>
        <Container className='sales'>
          <ContainerTitle>Sales</ContainerTitle>
        </Container>
        <Container className='graphs'>
          <ContainerTitle>Graphs</ContainerTitle>
        </Container>
        <Container className='alerts'>
          <ContainerTitle>Alerts</ContainerTitle>
        </Container>
        <Container className='messages'>
          <ContainerTitle>Messages</ContainerTitle>
        </Container>
        <Container className='settings'>
          <ContainerTitle>Settings</ContainerTitle>
        </Container>
      </Wrapper>
    </PageContainer>
  </>
);

Dashboard.getInitialProps = async (props) => {
  const { asPath } = props.ctx;

  return {
    asPath,
  };
};

export default Dashboard;
