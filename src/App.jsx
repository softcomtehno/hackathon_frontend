import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from './pages/register-page';

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
