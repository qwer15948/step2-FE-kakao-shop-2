import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from '../src/pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<RegisterPage/>}></Route>
          {/* 공통 레이아웃 :GNB, Footer*/}
          <Route element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/product/:id' element={<ProductDetailPage/>}></Route>
          </Route>

          {/* 404 에러 페이지 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
