import { useDispatch } from "react-redux";
import { Input, SearchForm, Wrapper } from "./SerachBar.styled";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllRecipes, getMyRecipes } from "../../redux/api";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(getMyRecipes({ title: value }));
    } else {
      dispatch(getAllRecipes({ title: value }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue("");
    if (isSignup) {
      dispatch(getMyRecipes());
    } else {
      dispatch(getAllRecipes());
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleChange} />
      <Wrapper>
        <button type="submit">Serch</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </Wrapper>
    </SearchForm>
  );
};
