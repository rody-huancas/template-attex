import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
    </div>
  )
};

export default DefaultLayout;
