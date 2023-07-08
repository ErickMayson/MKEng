// eslint-disable-next-line import/no-named-as-default, import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
// import Footer from '../Footer';
import { Container } from './styles';
import WebRoutes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <WebRoutes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
