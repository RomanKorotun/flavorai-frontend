import { FieldProps } from "formik";
import { FC, TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps;

export const TextArea: FC<Props> = ({ field, ...props }) => {
  return <textarea {...field} {...props} />;
};
