import React, { useState } from 'react';
import { Formik } from 'formik';
import { 
  Form, FormElement, Input, Error, Label, TextArea, FormButton,FormLabel
} from './EditForm.styles';
import { ToggleSwitch } from '../../ToggleSwitch';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import { ITodo } from '../../../types';
import { EditFormSchema } from '../../../schemas/form.schemas';
import { useEditTodo } from '../../../customHooks/useEditTodo.hook';
import { colors } from '../../../Theme';

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  todo: ITodo;
};

export const EditForm: React.FC<Props> = ({ setOpenModal, todo }) => {
  const { editTodo } = useEditTodo();

  const initState = {
    title: todo.title,
    text: todo.text,
    completed: todo.completed,
  };

  const [completed, setCompleted] = useState<boolean>(initState.completed);

  const toggleCompleted = () => {
    setCompleted((prev) => !prev);
  };

  return (
    <Formik
      initialValues={initState}
      validationSchema={EditFormSchema}
      onSubmit={(values, actions) => {
        editTodo(todo._id, { ...values, completed });
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
          <FormLabel>
            <Label htmlFor="completed">Complete</Label>
            <ToggleSwitch id="completed" check={completed} onClickFunction={toggleCompleted} />
            {formik.touched.completed && formik.errors.completed ? (
              <Error>{formik.errors.completed}</Error>
            ) : null}
          </FormLabel>
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
