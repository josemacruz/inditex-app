import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 25rem;
  width: 18.75rem;
  background-color: rgb(143, 190, 219, 0.2);
  display: flex;
    justify-content: center;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: .625rem;
`;

export const ImageBrand = styled.p`
  display: block;
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  left: calc(-100% + 20px);
  top: 0;
  width: 100%;
  pointer-events: none;
  z-index: 1;
  line-height: 1.3;
  font-family: benton-sans,sans-serif;
  font-size: .625rem;
  text-transform: uppercase;
  text-align: right;
`;

export const CardDetails = styled.div`
    padding: 0.375rem 0 0;
    height: auto;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    width: 100%;
    justify-content: space-between;
`;

export const Model = styled.h2`
    padding-bottom: 0.25rem;
    margin: 0;
    font-size: .875rem;
    line-height: 1.29;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    height: auto;
    color: #000;
`;

export const Brand = styled.p`
    padding-bottom: 0.25rem;
    margin: 0;
    font-size: .875rem;
    line-height: 1.29;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    height: auto;
    color: #000;
`;

export const Price = styled.p`
    padding-bottom: 0.25rem;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: .75rem;
    display: flex;
    align-items: flex-start;
    white-space: nowrap;
    margin-bottom: 0.25rem;
`;
