import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Name, Wrapper } from "./UserMenu.styled";
import { signout } from "../../redux/api";
import { useNavigate } from "react-router-dom";

export const UserInfo: FC = () => {
  const username = useSelector((store: RootState) => store.auth.username);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <>
      {username && (
        <Wrapper>
          <Name>Welcome, {username}!</Name>
          <button
            onClick={() => {
              dispatch(signout());
              navigate("/");
            }}
          >
            Logout
          </button>
        </Wrapper>
      )}
    </>
  );
};
