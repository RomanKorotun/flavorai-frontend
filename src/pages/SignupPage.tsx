import { FC } from "react";
import { Container } from "../GlobaStyles";
import { AuthForm } from "../components/AuthForm/AuthForm";

const SignupPage: FC = () => {
  return (
    <section>
      <Container>
        <AuthForm />
      </Container>
    </section>
  );
};

export default SignupPage;
