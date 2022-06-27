import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../app.config';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
