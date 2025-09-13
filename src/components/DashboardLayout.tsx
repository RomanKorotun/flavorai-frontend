import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const DashboardLayout: FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
