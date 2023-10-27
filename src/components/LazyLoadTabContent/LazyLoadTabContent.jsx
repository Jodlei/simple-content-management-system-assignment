import { lazy, Suspense } from "react";

const LazyLoadTabContent = ({ path }) => {
  const LazyLoadComponent = lazy(() => import(`../${path}`));

  return (
    <Suspense fallback={<div>Loading</div>}>
      <section>
        <LazyLoadComponent />
      </section>
    </Suspense>
  );
};

export default LazyLoadTabContent;
