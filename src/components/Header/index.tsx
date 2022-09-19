import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

export function Header(){
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="logo_dtmoney" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}