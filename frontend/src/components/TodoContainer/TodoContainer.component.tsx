import React from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { useTodos } from '../../customHooks/useTodos';
import { StyledTodoContainer, HeaderTitle, HeaderDescr, HeaderActions, StyledHeader, StyledTodoList, Error, LoaderContainer } from './TodoContainer.styles';
import { TodoItem } from '../TodoItem';
import { ITodo } from '../../types';

export const TodoContainer = () => {
  const { filterCriteria } = useParams();
  const { todos, status, error} = useTodos();

  console.log(todos);
  return (
    <>
      {todos && todos.length > 0 && (
        <StyledTodoContainer>
          <StyledHeader>
            <HeaderTitle>Todo Title</HeaderTitle>
            <HeaderDescr>Description</HeaderDescr>
            <HeaderActions>Actions</HeaderActions>
          </StyledHeader>
          <StyledTodoList>
          { todos && todos.length > 0 && (
              todos
                .filter(todo => {
                  switch (filterCriteria) {
                    case 'completed':
                      return todo.completed;
                    case 'active':
                      return !todo.completed;
                    default:
                      return true;
                }})
                .map((todo: ITodo, index: number) => (
                  <TodoItem
                    todo={todo}
                    key={todo._id}
                    index={index}
                  />
                ))
            )}
          </StyledTodoList>
        </StyledTodoContainer>
      )}
      {error && <Error>{error ?? 'something went wrong'}</Error>}
      {status === 'pending' && (
        <LoaderContainer>
          <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" />
        </LoaderContainer>
      )}
    </>
  );
};
