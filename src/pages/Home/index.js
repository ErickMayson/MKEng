import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import About from '../About';
import { HeaderContainer, PageContainer } from './styles';

export default function Home() {
  return (
    <PageContainer>
      <HeaderContainer>
        <Header />
        <Navbar />
      </HeaderContainer>
      <About />
    </PageContainer>
  );
}
