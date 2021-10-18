import Head from 'next/head';

import { Header } from 'components/layout';
import { Hero } from 'components/home';

import { Container } from 'styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomorrow Finance</title>
        <meta
          name='description'
          content='We invite top notch leading financial thinkers, creators and founders of the most innovative fintechs, banks, neobanks, payments companies of the new finance revolution.'
        />
        <meta
          name='keywords'
          content='banks,crypto bitcoin, ethereum, revolut, kraken, visa, circle, digital bank'
        />
      </Head>
      <Container>
        <Header />
        <Hero />
      </Container>
    </>
  );
}
