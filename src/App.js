import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import HeaderComponent from './components/HeaderComponent';
function App() {
  return (
   <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/products' element={<Product />}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
