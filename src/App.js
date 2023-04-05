import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
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
