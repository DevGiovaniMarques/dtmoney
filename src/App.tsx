import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobaStyle } from "./styles/Global";
import  { NewTransactionModal }  from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionProvider>
      <Header onOpenNewTransactionmodal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobaStyle />
    </TransactionProvider>
  );
}


