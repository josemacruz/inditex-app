import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import GridComponent from '../../components/grid/Grid';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import { FilterContainer, NoDataText, ProductsCount } from './ProductList.style';
import useFetchProducts from '../../hooks/useFetchProducts';
import { theme } from '../../app/globalStyles';
import Spinner from '../../components/spinner/Spinner';

function ProductList() {
  const navigate = useNavigate();

  const { products, isFetching, onChange } = useFetchProducts();

  const handleOnClick = useCallback((productId) => {
    navigate(`${productId}`);
  }, [navigate]);

  if (isFetching) return <Spinner color={theme.primaryColor} size={70} />;

  return (
    <>
      <FilterContainer>
        <ProductsCount>
          {`productos ${products && products.length}`}
        </ProductsCount>
        <SearchBar onSearch={onChange} />
      </FilterContainer>
      {products && products.length ? (
        <GridComponent
          component={Card}
          cards={products}
          onClick={handleOnClick}
        />
      ) : (
        <NoDataText>No hay productos disponibles.</NoDataText>
      )}
    </>
  );
}

export default ProductList;
