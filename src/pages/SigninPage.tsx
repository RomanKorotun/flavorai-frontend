import { FC } from "react";
import { Container } from "../GlobaStyles";
import { AuthForm } from "../components/AuthForm/AuthForm";

const SigninPage: FC = () => {
  return (
    <section>
      <Container>
        <AuthForm />
      </Container>
    </section>
  );
};

export default SigninPage;
