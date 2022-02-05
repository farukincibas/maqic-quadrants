import { ThemeProvider } from 'styled-components';
import GlobalStyleLocationBoard from './styles/GlobalStyle';
import { ContainerLeft } from './App.styles';
import Chart from './components/Chart';
import Table from './components/Table';
import { theme } from './styles/themes';
import ContextProvider from './store/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyleLocationBoard />
        <ContainerLeft>
          <Chart />
          <Table />
        </ContainerLeft>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;