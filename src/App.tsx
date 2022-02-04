import React, { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyleLocationBoard from './styles/GlobalStyle';
import { ContainerLeft } from './App.styles';
import Chart from './components/Chart';
import Table from './components/Table';
import { theme } from './styles/themes';
import { initialState, reducer } from './store/reducer';
import { Context } from './store/context';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('companies', JSON.stringify(state));
    }, 0);

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyleLocationBoard />
        <ContainerLeft>
          <Chart />
          <Table />
        </ContainerLeft>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;