import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 2.5rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const DetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-right: 2.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1200px) {
    margin-right: 0;
    width: auto;
    max-width: none;
  }
`;

export const DetailsImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 25rem;
  margin-top: 2rem;
  width: 18.75rem;
  background-color: rgba(143, 190, 219, 0.2);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;
