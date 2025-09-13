import { FC } from "react";
import { Container } from "../../GlobaStyles";
import { ContainerHeader, HeaderSection } from "./Header.styled";
import { NavMenu } from "../NavMenu/NavMenu";
import { UserInfo } from "../UserMenu/UserMenu";

export const Header: FC = () => {
  return (
    <HeaderSection>
      <Container>
        <ContainerHeader>
          <NavMenu />
          <UserInfo />
        </ContainerHeader>
      </Container>
    </HeaderSection>
  );
};
