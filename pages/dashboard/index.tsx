import Head from 'next/head';
import React, { FC, SFC } from 'react';

interface Props<P = {}> extends SFC<P> {
  repos: Object;
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Dashboard: FC<Props> = (props) => {
  const { repos } = props;
  console.log('respos:', repos);

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Dashboard</h1>
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const repos = await fetch('https://api.github.com/users/Davi-Silva/repos');

  const data = await repos.json();
  return {
    repos: data,
  };
};

export default Dashboard;
