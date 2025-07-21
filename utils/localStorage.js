export const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodos = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};
