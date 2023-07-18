import CartList from '../components/molecules/CartList';
import { Suspense, useEffect, useState } from 'react';
import { getCart } from '../services/cart';
import { useQuery } from 'react-query';
import Loader from '../components/atoms/Loader';

const CartPage = () => {
  const { data } = useQuery('cart', getCart);
  return (
    <Suspense fallback={<Loader />}>
      <CartList cart={data} />
    </Suspense>
  );
};

export default CartPage;
