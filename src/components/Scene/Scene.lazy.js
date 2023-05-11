import React, { lazy, Suspense } from 'react';

const LazyScene = lazy(() => import('./Scene'));

const Scene = props => (
  <Suspense fallback={null}>
    <LazyScene {...props} />
  </Suspense>
);

export default Scene;
