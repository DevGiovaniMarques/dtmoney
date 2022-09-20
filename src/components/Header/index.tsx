import LogoImg from '../../assets/logo.svg';

import { Container, Content } from './style';


interface HeaderProps{
  onOpenNewTransactionmodal: () => void;
}

export function Header({onOpenNewTransactionmodal}:HeaderProps){

    return (
    <Container>
      <Content>
        <img src={LogoImg} alt="logo_dtmoney" />
        <button type="button" onClick={onOpenNewTransactionmodal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}