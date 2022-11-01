import React from 'react';
import { Formik } from 'formik';
import { EditFormSchema } from '../../../schemas/form.schemas';
import {
  Form, FormElement, Label, Input, Error, FormButton, TextArea
} from '../EditForm/EditForm.styles';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import { useAddTodo } from '../../../customHooks/useAddTodo.hook';
import { colors } from '../../../Theme';

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddForm: React.FC<Props> = ({ setOpenModal }) => {
  const { addTodo } = useAddTodo();
  const initState = {
    title: '',
    text: '',
  };

  return (
    <Formik
      initialValues={initState}
      validationSchema={EditFormSchema}
      onSubmit={(values, actions) => {
        addTodo({...values, completed: false});
        actions.resetForm();
        setOpenModal(false);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <FormElement>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="type some title"
              {...formik.getFieldProps('title')}
              err={!!(formik.touched.title && formik.errors.title)}
            />
            {formik.touched.title && formik.errors.title ? (
              <Error>{formik.errors.title}</Error>
            ) : null}
          </FormElement>
          <FormElement>
            <Label htmlFor="text">Description</Label>
            <TextArea
              id="text"
              name="text"
              onChange={(e) => {
                e.target.style.height = '5px';
                e.target.style.height = `${e.target.scrollHeight}px`;
                formik.handleChange(e);
              }}
              placeholder="type some text"
              value={formik.values.text}
              onBlur={formik.handleBlur}
              err={!!(formik.touched.text && formik.errors.text)}
            />
            {formik.touched.text && formik.errors.text ? <Error>{formik.errors.text}</Error> : null}
          </FormElement>
          <FormButton>
            <Button type="submit" bgColor={colors.greenish}>
              Submit
            </Button>
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};
