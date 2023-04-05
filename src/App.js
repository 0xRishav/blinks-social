import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export default App;
