import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';

import NotFound from '@pages/404';
import Error from '@pages/500';
import Cart from '@pages/Cart';
import Detail from '@pages/Detail';
import Home from '@pages/Home';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';

import Footer from '@components/molecules/Footer';
import Header from '@components/molecules/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/detail/:id'} element={<Detail />} />
          <Route path={'/cart'} element={<Cart />} />
        </Route>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/500'} element={<Error />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
