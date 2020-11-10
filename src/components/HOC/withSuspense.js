import React, { Suspense } from 'react';
import Loader from '../Loader/Loader';

const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default withSuspense;
