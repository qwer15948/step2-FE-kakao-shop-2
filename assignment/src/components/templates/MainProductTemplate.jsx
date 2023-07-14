import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../atoms/Container';
import ProductGrid from '../organisms/ProductGrid';
import { getProducts } from '../../store/slices/productSlice';
import Loader from '../atoms/Loader';

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  //   const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.products.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && !isEnd) {
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 1,
    },
  );
  // useRef에 접근할 때 current
  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      <ProductGrid loading={loading} products={product} />
      <div ref={bottomObserver} />
    </Container>
  );
};

export default MainProductTemplate;
