import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex, Box, } from '@chakra-ui/react';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  console.log('call index');

  return (
    <div>
      <Head>
        <title>Blog -&gt; fnsunisa7</title>
        <meta name="description" content="my blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex mt='4'>
        <Posts />
        <Sidebar />
      </Flex>


    </div>
  );
}

export default Home;
