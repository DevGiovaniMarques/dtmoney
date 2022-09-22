import { useState } from 'react'
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import CloseImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
 
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen,onRequestClose}: NewTransactionModalProps ) => {
 
  const [type, setType] = useState('deposit');
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="Fechar Modal" />
      </button>
      <Container >
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder='Valor' />
        
        <TransactionTypeContainer>
          <RadioBox 
          type='button'
          onClick={()=>setType('deposit')}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
          type='button'
          onClick={()=>setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"

          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
  </Modal>
  )
}