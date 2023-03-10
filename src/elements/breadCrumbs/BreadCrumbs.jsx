import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadCrumbs, BreadCrumbsText } from './BreadCrumbs.style';

function Breadcrumbs() {
  const location = useLocation();

  const crumbs = useMemo(() => {
    let currentLink = '';
    return location.pathname.split('/')
      .filter((crumb) => crumb !== '')
      .map((crumb) => {
        currentLink += `/${crumb}`;
        return (
          <BreadCrumbsText key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </BreadCrumbsText>
        );
      });
  }, [location]);

  return (
    <BreadCrumbs>{crumbs.length ? crumbs : 'Home'}</BreadCrumbs>
  );
}

export default Breadcrumbs;
