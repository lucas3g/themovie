import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header>Movies</Header>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
