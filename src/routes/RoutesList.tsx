import { Routes, Route } from "react-router-dom";

import { FC, lazy } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

const SignupPage = lazy(() => import("../pages/SignupPage"));
const SigninPage = lazy(() => import("../pages/SigninPage"));
const AuthPage = lazy(() => import("../pages/AuthPage/AuthPage"));
const AllRecipesPage = lazy(() => import("../pages/AllRecipesPage"));
const MyRecipesPage = lazy(() => import("../pages/MyRecipesPage"));
const CreateRecipePage = lazy(() => import("../pages/CreateRecipePage"));

export const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<AllRecipesPage />} />
        <Route path="all-recipes" element={<AllRecipesPage />} />
        <Route path="my-recipes" element={<MyRecipesPage />} />
        <Route path="create-recipe" element={<CreateRecipePage />} />
      </Route>
    </Routes>
  );
};
