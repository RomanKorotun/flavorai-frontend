import { FC } from "react";
import { LinkNav, Nav } from "./NavMenu.styled";

export const NavMenu: FC = () => {
  return (
    <Nav>
      <LinkNav to="/dashboard/all-recipes">All Recipes</LinkNav>
      <LinkNav to="/dashboard/my-recipes">My Recipes</LinkNav>
      <LinkNav to="/dashboard/create-recipe">Create recipe</LinkNav>
    </Nav>
  );
};
