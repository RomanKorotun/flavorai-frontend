import * as Yup from "yup";

export const ReviewShema = Yup.object().shape({
  rating: Yup.number()
    .required("Required")
    .test("is-not-zero", "Required", (value) => value !== 0),
});
