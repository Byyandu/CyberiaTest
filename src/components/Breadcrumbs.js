import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const breadcrumbMap = {
    'Body': ' Кейсы'
  };

  return (
    <nav aria-label="breadcrumb">
        <p>Главная</p>
        {pathnames.map((segment, index) => {
          const translatedSegment = breadcrumbMap[segment] || segment;
          return (
            <p key={index}>
              {index === 0 && " / "} {translatedSegment}  {index > 0 && " / "} 
            </p>
          );
        })}
    </nav>
  );
};

export default Breadcrumbs;
