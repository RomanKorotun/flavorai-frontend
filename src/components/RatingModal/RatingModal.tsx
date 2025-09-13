import { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import { Formik, FormikProps } from "formik";
import { ReviewShema } from "../../validations/ratingShema";
import { StarRatingModal } from "../StarRating/StarRatingModal";
import {
  CustomModalReview,
  TitleReviewForm,
  DescriptionReviewForm,
  FormReview,
  LabelStyled,
  ErrMsg,
  ButtonSubmit,
} from "./RatingModal.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addRating } from "../../redux/api";

export type ModalRevievProps = {
  id: number;
  isOpenModal: boolean;
  onToggleModal: () => void;
};

type ReviewFormValues = {
  rating: number;
};

Modal.setAppElement("#root");

export const ModalReview: FC<ModalRevievProps> = ({
  id,
  isOpenModal,
  onToggleModal,
}) => {
  const [rating, setRating] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: ReviewFormValues) => {
    dispatch(addRating({ value: values.rating, recepId: id }));
    onToggleModal();
  };

  useEffect(() => {
    if (!isOpenModal) {
      setRating(0);
    }
  }, [isOpenModal]);

  const modalStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      zIndex: 1000,
      padding: "24px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      maxWidth: "400px",
      margin: "auto",
    },
  };

  return (
    <CustomModalReview
      isOpen={isOpenModal}
      onRequestClose={onToggleModal}
      contentLabel="Rating Modal"
      style={modalStyles}
    >
      <Formik<ReviewFormValues>
        initialValues={{ rating: 0 }}
        validationSchema={ReviewShema}
        onSubmit={handleSubmit}
      >
        {(formikProps: FormikProps<ReviewFormValues>) => {
          const { setFieldValue, handleSubmit } = formikProps;

          return (
            <FormReview onSubmit={handleSubmit}>
              <TitleReviewForm>Оцініть цей рецепт</TitleReviewForm>
              <DescriptionReviewForm>
                Це допоможе іншим знайти смачні рецепти
              </DescriptionReviewForm>

              <LabelStyled>
                <StarRatingModal
                  totalStars={5}
                  selectedStars={rating}
                  onStarClick={(index) => {
                    setFieldValue("rating", index);
                    setRating(index);
                  }}
                />
                <ErrMsg component="div" name="rating" />
              </LabelStyled>

              <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </FormReview>
          );
        }}
      </Formik>
    </CustomModalReview>
  );
};
