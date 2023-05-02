import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DashboardPage, LoginPage, RegisterPage } from './pages/';
import { AdminRoutes, ClientRoutes } from './components/routes';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Routes>

          {/* Pagina principal */}
          <Route path='/' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>

        {/* Rutas de administrador */}
        <AdminRoutes />

        {/* Rutas de Cliente */}
        {/* <ClientRoutes /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;