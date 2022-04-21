import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Components
import Login from './components/Login';
import Profile from './components/Profile';
import Authenticate from './components/Authenticate';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ marginBottom: 20 }}>
          <Link to='/'>Login </Link>
          <Link to='profile'>Profile</Link>
        </div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='authenticate' element={<Authenticate />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
