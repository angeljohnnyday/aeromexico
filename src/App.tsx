import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Characters from './pages/Characters';
import Favorites from './pages/Favorites';
import { Navbar } from './Component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box
        sx={{
          background: 'black',
          py: 2,
          mx: '-8px',
          height: '100vh',
          overflowX: 'auto'
        }}
      >
        <Container
          sx={{
            mt: 8,
          }}
        >
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
