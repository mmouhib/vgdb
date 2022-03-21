import Home from './components/Home';
import styled from 'styled-components';
import { SearchContextProvider } from './context/SearchContext';

const StyledApp = styled.div`
   width: 100vw;
   height: 100vh;
`;

export const App = () => (
   <StyledApp>
      <SearchContextProvider>
         <Home />
      </SearchContextProvider>
   </StyledApp>
);
