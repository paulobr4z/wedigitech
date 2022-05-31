import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}