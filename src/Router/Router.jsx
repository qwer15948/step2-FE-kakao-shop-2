import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/Error/NotFoundPage";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import OrderCompletePage from "../pages/OrderCompletePage";

import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import RequiredAuthLayout from "../layouts/RequiredAuthLayout";

const Router = () => {
  const staticServerUri = process.env.REACT_APP_PATH || "";
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />} />
      <Routes>
        {/* 단독 레이아웃 */}
        <Route path={staticServerUri + "/login"} element={<LoginPage />} />
        <Route
          path={staticServerUri + "/register"}
          element={<RegisterPage />}
        />

        {/* 공통 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path={staticServerUri + "/"} element={<HomePage />} />
          <Route
            path={staticServerUri + "/products/:id"}
            element={<ProductDetailPage />}
          />
        </Route>

        {/* 로그인 필요 레이아웃 */}
        <Route element={<RequiredAuthLayout />}>
          <Route path={staticServerUri + "/cart"} element={<CartPage />} />
          <Route path={staticServerUri + "/order"} element={<OrderPage />} />
          <Route
            path={staticServerUri + "/orders/:id"}
            element={<OrderCompletePage />}
          />
        </Route>

        {/* 404 */}
        <Route path={staticServerUri + "*"} element={<NotFoundPage />} />
      </Routes>
      <Suspense />
    </BrowserRouter>
  );
};

export default Router;
