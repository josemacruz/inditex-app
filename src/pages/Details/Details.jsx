import React from 'react';
import Actions from './Actions';
import { DetailsContainer, DetailsDescriptin, DetailsImageContainer } from './Details.style';
import Spinner from '../../elements/spinner/Spinner';
import { theme } from '../../app/globalStyles';
import ListItems from '../../components/list/List';
import useFetchProductById from '../../hooks/useFetchProductById';

function DetailsPage() {
  const { data, isFetching, productId } = useFetchProductById();

  if (isFetching) return <Spinner color={theme.primaryColor} size={70} />;

  return (
    <DetailsContainer>
      <DetailsImageContainer>
        <img src={data.image_url} alt={`${data.brand} ${data.model}`} />
      </DetailsImageContainer>
      <div>
        <DetailsDescriptin>
          <ListItems data={data} />
        </DetailsDescriptin>
        <div>
          <Actions productId={productId} />
        </div>
      </div>
    </DetailsContainer>
  );
}

export default DetailsPage;
