import { useReducer } from 'react';

export const useModal = (initialVisible = false) => {
  const [isVisible, toggleModal] = useReducer(
    (prev) => !prev,
    initialVisible,
  );

  return { isVisible, toggleModal };
};
