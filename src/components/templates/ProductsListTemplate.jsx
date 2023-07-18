import React, { useState, useRef, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query';
import getProducts from '../../api/getProducts';
import ProductsList from '../organisms/ProductsList';
import MainContainer from '../atoms/MainContainer';
import ProductCardSkeleton from '../molecules/ProductCardSkeleton';
import ListContainer from '../atoms/productsList/ListContainer';
import repeat from '../../utils/repeat';
import ErrorFallback from "../organisms/ErrorFallback";


const ProductsListTemplate = () => {

    const { 
        data: obj, 
        isError, error,
        fetchNextPage,
        isFetching,
        hasNextPage,
      } = useInfiniteQuery(
        "products",
        ({ pageParam = 0 }) => getProducts(pageParam),
        {getNextPageParam: (last, allPages) => {

          if (allPages[0].data.response.length === 0 
            || last.data.response.length < allPages[0].data.response.length) {
            const hasNextPage = false;
            return undefined
          }
          
          const lastPage = parseInt((last.data.response[0].id - 1) / 9);
          return lastPage + 1
        }}
      )

    const [next, setNext] = useState(true)

    const io = new IntersectionObserver(
        (entries, observer) => {
          if (!entries[0].isIntersecting) return;
          
          fetchNextPage();
        }, 
        {threshold: 1}
      );

    const targetBox = useRef(null);

    useEffect(()=>{
      if (hasNextPage) {io.observe(targetBox.current)}
      else if (hasNextPage === false) {     
        io.disconnect();
        setNext(prev => false);
      }
    }, [hasNextPage]) 

    return (
      <MainContainer column={true}>
        
        {obj && <ProductsList obj={obj} />}
        
        {isFetching 
          ? <ListContainer>
              {repeat(9).map((e,i) => {return <ProductCardSkeleton key={i}/>})}
            </ListContainer>
          : null}

        {/* 로딩된 페이지 없을 때*/}
        {obj?.pages[0].data.response.length === 0 && !isFetching 
        ? <ErrorFallback errorMessage="페이지를 찾을 수 없습니다." /> : null} 

        {next &&
          <div id="target" ref={targetBox}></div>}

      </MainContainer>
    )
}

export default ProductsListTemplate