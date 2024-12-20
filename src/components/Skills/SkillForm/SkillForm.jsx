import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SkillForm.css";
import Button from "../../Button/Button";

const SkillForm = ({ onSubmit }) => {
  const initialValues = {
    skillName: "",
    skillRange: "",
  };

  const validationSchema = Yup.object().shape({
    skillName: Yup.string().required("Skill name is a required field"),
    skillRange: Yup.number()
      .typeError("Skill range must be a 'number' type")
      .required("Skill range is a required field")
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isValid, dirty }) => (
        <Form>
          <div className="input-label-wrapper">
            <label className="label-skill-form" htmlFor="skillName">
              Skill name:
            </label>
            <Field
              className="input-field"
              type="text"
              id="skillName"
              name="skillName"
              placeholder="Enter skill name"
            />
            <ErrorMessage
              name="skillName"
              component="div"
              className="skillform-error"
            />
          </div>
          <div>
            <label className="label-skill-form" htmlFor="skillRange">
              Skill range:
            </label>
            <Field
              className="input-field"
              type="text"
              id="skillRange"
              name="skillRange"
              placeholder="Enter skill range"
            />
            <ErrorMessage
              name="skillRange"
              component="div"
              className="skillform-error"
            />
          </div>
          <Button
            style={"button-skills add-skill-button"}
            type="submit"
            disabled={!(isValid && dirty)}
          >
            Add skill
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SkillForm;
