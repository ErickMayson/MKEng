import { Container } from './styles';

import logo from '../../assets/images/MKlight.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" />
    </Container>
  );
}
