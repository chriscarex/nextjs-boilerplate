import App from 'next/app';
import Error from '../components/page/ErrorPage';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import 'semantic-ui-css/semantic.min.css';
import '../styles/styles.scss';

class MyApp extends App {
  render() {
    let { Component, pageProps } = this.props;

    if (pageProps.error) {
      pageProps = pageProps.error;
      Component = Error;
    }

    return (
      <>
        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </>
    );
  }
}

export default MyApp;
