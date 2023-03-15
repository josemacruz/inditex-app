import React from 'react';
import {
  BreadcrumbsWrapper, FirstHeader, HeaderWrapper, SecondHeader, Separator,
} from './Header.style';
import Logo from '../logo/Logo';
import Bag from '../bag/Bag';
import Breadcrumbs from '../breadCrumbs/BreadCrumbs';

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
