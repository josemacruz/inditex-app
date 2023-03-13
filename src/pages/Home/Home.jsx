import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetItemCartQuery } from '../../services/api/cart';
import Header from '../../components/header/Header';
import MainWrapper from './Home.style';

function Home() {
  const { data } = useGetItemCartQuery(undefined, {
    refetchOnMountOrArgChange: 3600,
    pollingInterval: 3600000,
  });

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/products');
  }, []);

  return (
    <div>
      <Header count={data && data.length} />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </div>
  );
}

export default Home;
