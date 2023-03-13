import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadCrumbs, BreadCrumbsText } from './BreadCrumbs.style';

function Breadcrumbs() {
  const location = useLocation();

  const crumbs = useMemo(() => {
    let currentLink = '';
    const filterLocation = location.pathname.split('/')
      .filter((crumb) => crumb !== '');
    return filterLocation
      .map((crumb, index) => {
        currentLink += `/${crumb}`;
        return (
          <BreadCrumbsText key={crumb} isActive={index === filterLocation.length - 1}>
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
