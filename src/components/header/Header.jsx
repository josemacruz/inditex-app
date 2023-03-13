import React from 'react';
import {
  BreadcrumbsWrapper, FirstHeader, HeaderWrapper, SecondHeader, Separator,
} from './Header.style';
import Logo from '../../elements/logo/Logo';
import Bag from '../../elements/bag/Bag';
import Breadcrumbs from '../../elements/breadCrumbs/BreadCrumbs';

function Header({ count = 0 }) {
  return (
    <HeaderWrapper>
      <FirstHeader>
        <Logo />
        <Bag count={count} />
      </FirstHeader>
      <SecondHeader>
        <BreadcrumbsWrapper>
          <Breadcrumbs />
        </BreadcrumbsWrapper>
        <Separator />
      </SecondHeader>
    </HeaderWrapper>
  );
}

export default Header;
